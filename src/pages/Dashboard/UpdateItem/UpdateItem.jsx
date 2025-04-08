import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const { name, category, recipe, price ,_id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and thn get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseInt(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            };
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is UPdated to the menu`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
        console.log("with image url", res.data);
    };

    return (
        <div>
            <SectionTitle
                heading="Update Item"
                subHeading="Refresh Info"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend ">
                                Recipe Name
                            </legend>
                            <input
                                type="text"
                                defaultValue={name}
                                className="input w-full"
                                placeholder="Recipe Name"
                                {...register("name")}
                            />
                        </fieldset>
                        <div className="flex gap-6">
                            {/* Category  */}
                            <fieldset className="fieldset flex-1">
                                <legend className="fieldset-legend ">
                                    Category Name
                                </legend>
                                <select
                                    {...register("category")}
                                    defaultValue={category}
                                    className="select select-ghost bg-white w-full"
                                >
                                    <option disabled={true}>
                                        Select a category
                                    </option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </fieldset>
                            {/* price  */}
                            <fieldset className="fieldset flex-1">
                                <legend className="fieldset-legend ">
                                    Price
                                </legend>
                                <input
                                    type="number"
                                    defaultValue={price}
                                    className="input w-full"
                                    placeholder="Price"
                                    {...register("price")}
                                />
                            </fieldset>
                        </div>
                        {/* Recipe Details  */}
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Recipe Details
                                </legend>
                                <textarea
                                    defaultValue={recipe}
                                    {...register("recipe")}
                                    className="textarea h-24 w-full"
                                    placeholder="Recipe Details"
                                ></textarea>
                            </fieldset>
                        </div>
                        <div>
                            <input
                                {...register("image")}
                                type="file"
                                className="file-input w-full"
                            />
                        </div>
                        <button className="btn ml-4">Update Menu Item </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
