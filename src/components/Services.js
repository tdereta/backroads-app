import Title from "./Title"
import { services } from "../data"
import Service from "./Service"

const Services = (id) => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <Title title="our" subTitle="services" />
            </div>
            <div className="section-center services-center">
                {services.map((service) => {
                    return (
                        <Service key={id} {...service} />
                    )
                })}
            </div>
        </section>
    );
}

export default Services;