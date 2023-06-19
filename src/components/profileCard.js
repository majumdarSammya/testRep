export default function profileCard({ props }) {
  const name = props.name;
  const role = props.role;
  const profilePhotoPath = props.path;
  const email = props.mail;

  return (
    <div className="">
      <div className="flex items-center  pt-[20%] w-full justify-center px-4">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-4">
            <img
              className="w-20 h-20 rounded-full mx-auto shadow-md object-cover"
              src={profilePhotoPath}
              alt="John Doe"
            />

            <div className="p-1">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {name}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{role}</p>
              </div>
              <table className="text-xs my-1">
                <tbody>
                  <tr>
                    <td className="pl-2 py-1 text-gray-500 font-semibold">
                      Email:
                    </td>
                    <td className="px-1 py-1">{email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
