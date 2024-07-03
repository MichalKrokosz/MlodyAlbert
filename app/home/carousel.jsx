import Image from "next/image"
export default function Carousel(){
    return(
        <>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <Image src="/images/home/home5.jpg" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
                <div class="carousel-item">
                <Image src="/images/home/home6.jpg" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
                <div class="carousel-item">
                <Image src="/images/home/home7.jpg" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
                <div class="carousel-item">
                <Image src="/images/home/home8.jpg" width={300} height={500} class="d-block w-100" style={{height: "auto"}} alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}