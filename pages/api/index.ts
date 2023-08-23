

export const subscriptionApi = async (email: string) => {
  const response = await fetch("http://localhost:5900/global/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      to: process.env.NEXT_PUBLIC_MAIN_EMAIL,
      from: "nooby",
      subject: "Email Subscription",
      body: `Email: ${email} has subscribed on our newsletter`,
    })
  });

  if (response.ok) {
    console.log("Subscribed successfully.");
    return { success: true }
  } else {
    console.log("Failed to subscribe.");
    return { success: false }
  }
}