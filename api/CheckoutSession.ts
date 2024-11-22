import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { plan }: { plan: 'premiumPlus' | 'premiumMonthly' } = req.body;

    // Define your actual product price IDs
    const prices: Record<string, string> = {
      premiumPlus: 'prod_QiTrutNXvQ6wd3',  // Replace with your actual price ID
      premiumMonthly: 'prod_QiTrHdrseAFJMK',  // Replace with your actual price ID
    };

    try {
      // Create the checkout session with the selected plan's price
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: prices[plan],
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // Return session ID as response
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};