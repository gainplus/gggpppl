import { SignUp } from "@clerk/nextjs";

export const runtime = 'edge';

export default function Page() {
  return (
    <div className="flex items-center justify-center pt-8">
      <SignUp />
    </div>
  );
}
