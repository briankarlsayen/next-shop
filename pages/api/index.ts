export const subscriptionApi = async (email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/global/sendmail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: process.env.NEXT_PUBLIC_MAIN_EMAIL,
        from: "urbanik",
        subject: "Email Subscription",
        body: `Email: ${email} has subscribed on our newsletter`,
      }),
    }
  );

  if (response.ok) {
    console.log("Subscribed successfully.");
    return { success: true };
  } else {
    console.log("Failed to subscribe.");
    return { success: false };
  }
};
