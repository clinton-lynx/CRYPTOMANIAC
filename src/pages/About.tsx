import React from 'react'
import Header from "../components/Header";
import "../assets/styles/pages/homepage.scss";
import Footer from "../components/footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { ScrollBack, ScrollForward } from "../assets/icons/icons";
import BlogCard from "../components/BlogCard";

const About = () => {
    return (

        <>
            <Header />
            <Footer />
        </>

    )
}

export default About;