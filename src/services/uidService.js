export async function verifyUID(uid) {
  try {
    const response = await fetch(
      `https://info.killersharmabot.online/player-info?uid=${uid}`
    );

    if (!response.ok) {
      throw new Error("Unable to verify UID");
    }

    const data = await response.json();

    if (!data.basicInfo) {
      throw new Error("Player not found");
    }

    return {
      success: true,
      player: {
        uid: data.basicInfo.accountId,
        name: data.basicInfo.nickname,
        level: data.basicInfo.level,
        likes: data.basicInfo.liked,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}