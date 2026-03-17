# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-07-03

- Aligned all owner info and brand defaulting to Chirag Dodiya for LeadSync.
- All email and contact flows now send as Chirag Dodiya & chirag@bidx.ai.
- Updated SendGrid sender name and default, adjusted landing/team content, and ensured footer/contact use Chirag's email.
- Authentication, DB, and email still production-ready and working.
- Ready to extend further with additional features.

Key files:  
- `lib/email/sendgrid.ts`  
- `content/home.ts`  
- `CHANGELOG.md`

## 2026-07-02

- Implemented full secure authentication system for LeadSync.
- Added `/auth` route with client/server split (sign-in & sign-up forms, error feedback).
- Wired bcryptjs password hashing, user validation, httpOnly cookies with session helpers.
- `users` table schema and migrations in Drizzle with unique email/secure password hash.
- Server actions for login and signup with Zod validation, unique email constraint.
- Secure navbar UX: "Dashboard" for logged-in users, "Sign in"/"Sign up" for guests.
- `/dashboard` server component, session enforcement, user greeting; sign-out action.
- All changes production-ready, session and migration safe.

Key files:  
- `lib/db/schema.ts`  
- `lib/auth/session.ts`  
- `app/auth/actions.ts`  
- `app/auth/page.tsx`  
- `app/auth/client.tsx`  
- `components/layout/navbar.tsx`  
- `app/dashboard/page.tsx`
- `app/dashboard/layout.tsx`
- `app/dashboard/client.tsx`
- `app/dashboard/actions.tsx`
- `drizzle/0000_minor_crusher_hogan.sql`
- `drizzle/meta/_journal.json`
- `package.json`