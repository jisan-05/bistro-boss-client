import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu,,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/menu/${item._id}`)
              console.log(res.data)
              if(res.data.deletedCount>0){
                // use refetch to update data

                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
              }
              
                
            }
        });
    };

    return (
        <div>
            <SectionTitle
                heading="Manage All Items"
                subHeading="Hurry Up"
            ></SectionTitle>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                    <button className="btn  btn-sm bg-orange-500 btn-ghost px-3 py-5">
                                        <FaEdit className="text-white text-md"></FaEdit>
                                    </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleDeleteItem(item);
                                        }}
                                        className="btn btn-ghost btn-xs p-4"
                                    >
                                        <FaTrashAlt className="text-red-600 text-2xl"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
