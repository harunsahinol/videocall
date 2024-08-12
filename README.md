# VideoCall

VideoCall is a modern video conferencing application developed using Clerk and getstream.io. Built on the Next.js framework, this application allows users to make video calls easily and securely.

## Features

- Clerk integration for user authentication and management
- Use of getstream.io for real-time video and audio communication
- Responsive and user-friendly interface
- Room creation and joining features
- Screen sharing
- Chat function

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Clerk](https://clerk.dev/)
- [GetStream.io](https://getstream.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

Follow these steps to run this project on your local machine:

1. Clone the repository:
```git clone https://github.com/harunsahinol/videocall_app.git```
2. Navigate to the project directory:
```cd videocall_app```
3. Install the necessary dependencies:
```npm install```
4. Create a `.env.local` file and add the required environment variables:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_GETSTREAM_APP_ID=your_getstream_app_id
NEXT_PUBLIC_GETSTREAM_API_KEY=your_getstream_api_key
GETSTREAM_API_SECRET=your_getstream_api_secret
```
5. Run the application in development mode:
```npm run dev```
6. Open `http://localhost:3000` in your browser to view the application.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Harun Şahinol - [GitHub](https://github.com/harunsahinol) - harun.sahinol@outlook.com

