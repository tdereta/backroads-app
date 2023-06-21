import Title from "./Title"
import { tours } from "../data"
import Tour from "./Tour"

const Tours = (id) => {
    return (
        <section className="section" id="tours">
            <div className="section-title">
                <Title title="featured" subTitle="tours" />
            </div>

            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return <Tour key={id} {...tour} />
                })}
            </div>
        </section>
    );
}

export default Tours;