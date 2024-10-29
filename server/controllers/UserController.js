import { Webhook }  from 'svix';

// API Controller Function to Manage Clerk User with database
// http://localhost:4000/api/user/webhooks

const clerkWebhooks = async(req,res) =>{
    try {   
        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body))


    } catch (error) {
        
    }
}