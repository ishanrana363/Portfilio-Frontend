import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home-page/HomePage";
import AboutPage from './../pages/about-page/AboutPage';
import SkillPage from './../pages/skill-page/SkillPage';
import ServicePage from './../pages/service-page/ServicePage';
import ProjectPage from './../pages/project-page/ProjectPage';
import BlogPage from './../pages/blog-page/BlogPage';
import ContactPage from './../pages/contact-page/ContactPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout></MainLayout>,
        children: [
            {
                path : "/",
                element : <HomePage></HomePage>
            },
            {
                path : "about",
                element : <AboutPage></AboutPage>
            },
            {
                path : "skill",
                element : <SkillPage></SkillPage>
            },
            {
                path : "service",
                element : <ServicePage></ServicePage>
            },
            {
                path : "project",
                element : <ProjectPage></ProjectPage>
            },
            {
                path:"blog",
                element : <BlogPage></BlogPage>
            },
            {
                path : "contact",
                element : <ContactPage></ContactPage>
            }
        ]
    }
]);