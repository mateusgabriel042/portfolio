import { useState } from 'react';
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin } from "react-icons/bi";
import { DiGithubAlt } from "react-icons/di";

export const SocialNetwork = () => {
  const [isOnsideFacebook, setIsOnsideFacebook] = useState(false);
  const [isOnsideInstagram, setIsOnsideInstagram] = useState(false);
  const [isOnsideLinkedin, setIsOnsideLinkedin] = useState(false);
  const [isOnsideGithub, setIsOnsideGithub] = useState(false);

  return (


    <div className="flex items-center h-full gap-x-2">
      <Link href="#" target="_blank" className={`link_social_network ${isOnsideFacebook ? 'facebook_link_inside' : ''}`}
        onMouseEnter={() => setIsOnsideFacebook(!isOnsideFacebook)}
        onMouseLeave={() => setIsOnsideFacebook(!isOnsideFacebook)}
      >
        <BiLogoFacebook size="18" />
        <span>Facebook</span>
      </Link>

      <Link href="#" target="_blank" className={`link_social_network ${isOnsideInstagram ? 'instagram_link_inside' : ''}`}
        onMouseEnter={() => setIsOnsideInstagram(!isOnsideInstagram)}
        onMouseLeave={() => setIsOnsideInstagram(!isOnsideInstagram)}
      >
        <BiLogoInstagramAlt size="16" />
        <span>Instagram</span>
      </Link>

      <Link href="#" target="_blank" className={`link_social_network ${isOnsideLinkedin ? 'linkedin_link_inside' : ''}`}
        onMouseEnter={() => setIsOnsideLinkedin(!isOnsideLinkedin)}
        onMouseLeave={() => setIsOnsideLinkedin(!isOnsideLinkedin)}
      >
        <BiLogoLinkedin size="16" />
        <span>Linkedin</span>
      </Link>

      <Link href="#" target="_blank" className={`link_social_network ${isOnsideGithub ? 'github_link_inside' : ''}`}
        onMouseEnter={() => setIsOnsideGithub(!isOnsideGithub)}
        onMouseLeave={() => setIsOnsideGithub(!isOnsideGithub)}
      >
        <DiGithubAlt size="18" />
        <span>Github</span>
      </Link>
    </div>
  )
}

export default SocialNetwork;