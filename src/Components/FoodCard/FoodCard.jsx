import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const { image, price, recipe, name, _id } = item;
    const handleAddToCart = (food) => {
        if (user && user.email) {
            // send cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };
            axios.post("http://localhost:5000/carts", cartItem).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: `${name} added successful`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
        } else {
            Swal.fire({
                title: "You are not Login?",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user in login page
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-2 px-2">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className="">{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 border-yellow-300 mx-auto bg-gray-200 hover:bg-gray-700 hover:border-black hover:text-white"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
