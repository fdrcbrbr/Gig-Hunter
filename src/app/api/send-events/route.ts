import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { events } = await request.json();

  const apiKey = process.env.MAILCHIMP_API_KEY!;
  const listId = process.env.MAILCHIMP_LIST_ID!;
  const datacenter = apiKey.split("-")[1];

  try {
    for (const event of events) {
      const data = {
        email_address: "email@example.com",
        status: "subscribed",
        merge_fields: {
          ARTIST: event.artista,
          DATE: event.data,
          CITY: event.city,
          COUNTRY: event.country,
        },
      };

      const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `apikey ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Error Mailchimp:", error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error json:', error);
    return NextResponse.json(
      { success: false, error: "Error while sending" },
      { status: 500 }
    );
  }
} 