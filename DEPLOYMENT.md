# Cloudflare Pages Deployment Guide

## Prerequisites
1. A Cloudflare account
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Choose **Connect to Git**
5. Select your repository and authorize Cloudflare

### 2. Configure Build Settings
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty if your project is in the root)

### 3. Environment Variables (Optional)
If you want to integrate with external services, add these in the Pages dashboard:

- `WEBHOOK_URL`: URL to send waitlist signups to (e.g., Zapier webhook)
- `DATABASE_URL`: Database connection string (if using external database)

### 4. Deploy
Click **Save and Deploy**. Cloudflare will:
1. Build your project
2. Deploy the static assets
3. Set up the serverless functions automatically

## Function Endpoints

After deployment, your API endpoint will be available at:
```
https://your-project.pages.dev/api/submit-waitlist
```

## Testing the Function

You can test the waitlist function with curl:

```bash
curl -X POST https://your-project.pages.dev/api/submit-waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## Integration Options

### Option 1: Webhook Integration (Recommended)
1. Set up a webhook service (Zapier, Make.com, or custom endpoint)
2. Add the webhook URL as `WEBHOOK_URL` environment variable
3. Uncomment the webhook code in `functions/api/submit-waitlist.ts`

### Option 2: Database Integration
1. Set up a database (Supabase, PlanetScale, etc.)
2. Add connection details as environment variables
3. Modify the function to store emails in your database

### Option 3: Email Service Integration
1. Sign up for an email service (ConvertKit, Mailchimp, etc.)
2. Use their API to add subscribers
3. Add API credentials as environment variables

## Monitoring

- View function logs in the Cloudflare Dashboard under Pages > Functions
- Monitor performance and errors in the Analytics tab
- Set up alerts for function failures

## Custom Domain (Optional)

1. Go to your Pages project settings
2. Click **Custom domains**
3. Add your domain and follow DNS setup instructions

## Security Notes

- The function includes CORS headers for cross-origin requests
- Security headers are added via middleware
- Input validation is performed on email addresses
- Consider adding rate limiting for production use