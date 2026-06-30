import { supabase } from "../lib/supabase";

export async function submitPayment({
  selectedPackage,
  utr,
  screenshot,
}) {
  let screenshotUrl = null;

  // Upload screenshot if provided
  if (screenshot) {
    const fileName = `${Date.now()}-${screenshot.name}`;

    const { error: uploadError } = await supabase.storage
      .from("payment-screenshots")
      .upload(fileName, screenshot);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from("payment-screenshots")
      .getPublicUrl(fileName);

    screenshotUrl = data.publicUrl;
  }

  // Save payment
  const { error } = await supabase.from("payments").insert({
    package: selectedPackage,
    utr: utr || null,
    screenshot_url: screenshotUrl,
    status: "pending",
  });

  if (error) {
    throw error;
  }

  return true;
}