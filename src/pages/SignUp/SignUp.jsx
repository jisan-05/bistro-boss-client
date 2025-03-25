import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    };

    // console.log(watch("example"))

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                {...register("name", { required: true })}
                                className="input"
                                placeholder="Enter Name"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    Name is required
                                </span>
                            )}
                            <label className="fieldset-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="input"
                                placeholder="Email"
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    email is required
                                </span>
                            )}
                            <label className="fieldset-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters long",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message:
                                            "Password must be at most 20 characters long",
                                    },
                                    pattern:
                                        /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{8,20}/,
                                })}
                                className="input"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <p className="text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-500">Password must be 1 uppercase 1 lowercase and 1 digit and 1 special characters</p>
                            )}
                            <div>
                                <a className="link link-hover">
                                    Forgot password?
                                </a>
                            </div>
                            <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
