import {socialLinks} from "../data"

const SocialLinks = ({ parentSocialClass, itemSocialClass }) => {
    return (
        <ul className={parentSocialClass}>
            {socialLinks.map(link => {
                const { id, icon, href } = link
                return (
                    <li key={id}>
                        <a href={href} target="_blank" rel="noreferrer" className={itemSocialClass}
                        ><i className={icon}></i
                        ></a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SocialLinks