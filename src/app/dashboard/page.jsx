import { redirect } from "next/navigation";
import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "@/components/Header";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();


  const user = await getUser();
  const isAuthenticated = !!user;

  return (
    <div>
      <Header user={user} />


      {isAuthenticated ? (
        <>

          <div className="p-6">
            <h1 className="text-2xl font-bold">
              Hello {user?.given_name || "User"}, Welcome to your profile!
            </h1>
            <p>Enjoy your stay on the dashboard.</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-center mt-40 items-center">
            <h1 className="text-3xl text-red-600">If you want to view this page, please</h1>
            <LoginLink className="mr-5 btn btn-neutral">Login</LoginLink>
          </div>


        </>
      )}
    </div>
  );
}
