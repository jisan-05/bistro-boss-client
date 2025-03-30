import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const onSubmit =async (data) => {
      console.log(data)
      // image upload to imgbb and thn get an url
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
          'content-type': 'multipart/form-data'
        }
      })
      console.log(res.data)
    };
    return (
        <div>
            <SectionTitle
                heading="add an item"
                subHeading="What's new?"
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
                                    defaultValue="Pick a font"
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
                                    {...register('recipe')}
                                    className="textarea h-24 w-full"
                                    placeholder="Recipe Details"
                                ></textarea>
                            </fieldset>
                        </div>
                        <div>
                            <input {...register('image')} type="file" className="file-input w-full" />
                        </div>
                        <button className="btn ml-4">Add Item <FaUtensils></FaUtensils> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
