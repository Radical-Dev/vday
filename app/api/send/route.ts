import { YesEmailTemplate } from "../../../components/yes-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const dataInput = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Quewayne <noreply@adonisfitnessclub.com>",
      to: ["quewayne.grant@yahoo.com"],
      subject: "Hello world",
      react: YesEmailTemplate({ response: dataInput.note }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
