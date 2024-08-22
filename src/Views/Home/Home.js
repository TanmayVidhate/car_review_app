import React from "react";
import "./Home.css";
import Cards from "../../Components/Cards/Cards.js";

const cars = [

    {
        name: "Car1",
        desc: "Lorem, ipsum dolor sit amet  elit. Assumenda placeat repellat culpa inventore dolorem, vel quasi aliquam expedita totam dolores ",
        imgurl: "https://img.freepik.com/free-photo/silver-sedan-with-red-lights-parked-port_114579-4385.jpg?w=1060&t=st=1724222092~exp=1724222692~hmac=b9a310254328ba517287b24f9de4729d57ff0a60cfe281a5ff1051ad4f87d3d2"
    },

    {
        name: "Car2",
        desc: "Lorem, ipsum dolor. Assumenda placeat repellat culpa inventore dolorem quisquam, vel quasi aliquam expedita totam dolores ",
        imgurl: "https://www.cnet.com/a/img/resize/849f332b781a2efec02df21dd00cab56a5134343/hub/2022/02/11/dbdcbb1d-d322-45cb-bb9c-3657fdf38f31/2021-mercedes-amg-g63-china-blue-137.jpg?auto=webp&fit=crop&height=1293&width=2300"
    },

    {
        name: "Car3",
        desc: "Lorem, ipsum dolor sit amet.repellat culpa inventore dolorem accusamus esse suscipit quisquam, vel quasi aliquam expedita totam dolores ",
        imgurl: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1724224532~exp=1724228132~hmac=aeb343e54750d08aadfc8c289220dcc6c42e780fe242483cab0f4456512a270b&w=1060"
    },

    {
        name: "Car4",
        desc: "Assumenda placeat repellat culpa inventore dolorem accusamus esse suscipit quisquam, vel quasi aliquam expedita totam dolores ",
        imgurl: "https://cdn.motor1.com/images/mgl/zxQBp4/s1/2024-lamborghini-revuelto-exterior.webp"
    },

    {
        name: "Car5",
        desc: "Lorem, ipsum dolor sit adipisicing elit. Assumenda placeat repellat culpa inventore dolorem accusamus esse suscipit quisquam, vel quasi aliquam expedita totam dolores ",
        imgurl: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Car6",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat repellat culpa  totam dolores ",
        imgurl: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/09/resize_2022_mclaren_720-s-coupe_2022_mclaren_720-s-coupe_9ef98779-1839-44a0-84ac-9914d23bd148-khpj0b-62375-62376-scaled.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
    },
    {
        name: "Car7",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat repellat culpa inventore.",
        imgurl: "https://cdn.motor1.com/images/mgl/zxxMzK/s1/2023-porsche-911-gt3-rs.webp"
    },

    {
        name: "Car8",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda placeat repellat culpa inventore dolorem accusamus esse ",
        imgurl: "https://images.barrons.com/im-784511/horizontal?width=700&size=1.5&pixel_ratio=1.5"
    }
]

const Home = () => {
    return (
        <>
            <p className="heading">Car Review </p>
            <div className="card_container">
                {
                    cars.map((carlist) => {
                        return<Cards
                        name={carlist.name}
                        desc={carlist.desc}
                        imgurl={carlist.imgurl}
                        />
                    })
                }
            </div>
        </>
    )
}
export default Home;