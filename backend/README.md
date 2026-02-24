# Portfolio Contact Backend

Express + MongoDB backend for the Contact Me form.

## Setup

1. Copy `.env.example` to `.env`
2. Add your MongoDB URI to `MONGO_URI`
3. Set `CORS_ORIGIN` to your frontend origin (use `*` for development, or `https://yourdomain.com` for production)

## Install and Run

```bash
npm install
npm run dev
```

## API

- `GET /api/health` - health check
- `POST /api/contact` - submit contact form

### POST body

```json
{
  "name": "Your name",
  "email": "you@example.com",
  "phone": "9876543210",
  "subject": "Project discussion",
  "message": "Hi, I want to work with you..."
}
```
