import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home-page/HomePage";
import AboutPage from './../pages/about-page/AboutPage';
import SkillPage from './../pages/skill-page/SkillPage';
import ServicePage from './../pages/service-page/ServicePage';
import ProjectPage from './../pages/project-page/ProjectPage';
import BlogPage from './../pages/blog-page/BlogPage';
import ContactPage from './../pages/contact-page/ContactPage';
import DisclaimerPage from "../pages/disclaimer-page/DisclaimerPage";
import IntellectualPage from "../pages/intellectual-page/IntellectualPage";
import DataPrivacyPage from "../pages/data-privacy-page/DataPrivacyPage";
import LimitationsPage from "../pages/limitations-page/LimitationsPage";
import WebDesign from "../pages/web-design-page/WebDesign";
import WebDevelopment from "../pages/web-design-page/WebDevelopment";
import ECommerce from "../pages/web-design-page/ECommerce";
import BackendDevelopment from "../pages/web-design-page/BackendDevelopment";
import BlogDetailsPage from "../pages/blog-page/BlogDetailsPage";
import StackOverFlow from "../pages/stack-over-page/StackOverFlow";
import StackDetails from "../pages/stack-over-page/StackDetails";
import LoginPage from "../components/login/LoginPage";
import AdminLayout from "../layout/AdminLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "skill",
                element: <SkillPage></SkillPage>
            },
            {
                path: "service",
                element: <ServicePage></ServicePage>
            },
            {
                path: "project",
                element: <ProjectPage></ProjectPage>
            },
            {
                path: "blog",
                element: <BlogPage></BlogPage>
            },
            {
                path: "contact",
                element: <ContactPage></ContactPage>
            },
            {
                path: "/disclaimer",
                element: <DisclaimerPage></DisclaimerPage>
            },
            {
                path: "/intectual",
                element: <IntellectualPage></IntellectualPage>
            },
            {
                path: "/data-privacy",
                element: <DataPrivacyPage></DataPrivacyPage>
            },
            {
                path: "/limatation",
                element: <LimitationsPage></LimitationsPage>
            },
            {
                path: "/web-design",
                element: <WebDesign></WebDesign>
            },
            {
                path: "/web-development",
                element: <WebDevelopment></WebDevelopment>
            },
            {
                path: "/e-commerce",
                element: <ECommerce></ECommerce>
            },
            {
                path: "/backend-development",
                element: <BackendDevelopment></BackendDevelopment>
            },
            {
                path: "/blog-details/:id",
                element: <BlogDetailsPage></BlogDetailsPage> // Replace "id" with the actual blog post ID
            },
            {
                path: "/stack-overflow",
                element: <StackOverFlow></StackOverFlow> // Replace "StackOverflowPage" with the actual page component for Stack Overflow
            },
            {
                path: "/stack-details/:id",
                element: <StackDetails></StackDetails>
            }

        ]
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/admin-dashboard",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path : "",
                element : <div>home page</div>
            }
        ]
    }
]);