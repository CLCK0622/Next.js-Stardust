import {
    FaGithub, FaLinkedin, FaTwitter, FaInstagram,
    FaDribbble, FaSteam, FaSnapchatGhost
} from 'react-icons/fa';
import { SiBilibili, SiZhihu } from 'react-icons/si';
import Image from "next/image";
import {FaMastodon, FaSnapchat, FaUnsplash, FaXTwitter} from "react-icons/fa6";
import {MdAttachEmail} from "react-icons/md";
import {siteConfig} from "@/config/site";

export default function About() {
    return (
        <div className="page-wrapper">
            <div className="about-grid">
                <div className="img-container">
                    <Image
                        src={siteConfig.avatar}
                        width={450}
                        height={650}
                        alt="Avatar"
                        className="profile-img"
                    />
                </div>

                <div className="bio">
                    <h2>About Me</h2>
                    <p>
                        Hello! I&#39;m <strong>{siteConfig.author}</strong>.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing elit quisque faucibus ex sapien vitae pellentesque. Vitae pellentesque sem placerat in id cursus mi. Cursus mi pretium tellus duis convallis tempus leo. Tempus leo eu aenean sed diam urna tempor. Urna tempor pulvinar vivamus fringilla lacus nec metus.
                    </p>

                    <div className="connect-grid">
                        <h4>Connect</h4>
                        <div className="grid">
                            <a href={siteConfig.social.github} className="connect-link">
                                <FaGithub className="icon"/> <span>GitHub</span>
                            </a>
                            <a href={siteConfig.social.linkedin} className="connect-link">
                                <FaLinkedin className="icon" style={{color: '#0077b5'}}/> <span>LinkedIn</span>
                            </a>
                            <a href={siteConfig.social.twitter} className="connect-link">
                                <FaXTwitter className="icon" style={{color: '#000000'}}/> <span>X</span>
                            </a>
                            {/*<a href="#" className="connect-link">*/}
                            {/*    <FaUnsplash className="icon" style={{color: '#111111'}}/> <span>Unsplash</span>*/}
                            {/*</a>*/}
                            {/*<a href="#" className="connect-link">*/}
                            {/*    <FaInstagram className="icon" style={{color: '#c13584'}}/> <span>Instagram</span>*/}
                            {/*</a>*/}
                            {/*<a href="#" className="connect-link">*/}
                            {/*    <FaMastodon className="icon" style={{color: '#6364ff'}}/> <span>Mastodon</span>*/}
                            {/*</a>*/}
                            {/*<a href="#" className="connect-link">*/}
                            {/*    <FaSnapchatGhost className="icon" style={{color: '#fffc00'}}/> <span>Snapchat</span>*/}
                            {/*</a>*/}
                            <a href={siteConfig.social.email} className="connect-link">
                                <MdAttachEmail className="icon" style={{color: '#7c7c7c'}}/> <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}