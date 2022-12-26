import sendgrid from "@sendgrid/mail";

const apiKey = "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";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        sendgrid.setApiKey(apiKey);
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "gold2@yopmail.com", // Your email where you'll receive emails
            from: "gold@yopmail.com", // your website email address here
            subject: `${req.body.fullName}`,
            html: `<div>You've got a mail</div>`,
        });
    } catch (error) {
        // console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;