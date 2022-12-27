import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://media.istockphoto.com/id/1339854693/photo/pumpkin-filled-ravioli-pasta-above-table-scene-on-a-dark-background.jpg?b=1&s=170667a&w=0&k=20&c=jKphpHmNNsYr6BGny3WZ722oG2PKPNVy15JysojMQS8=",
  },
  {
    url: "https://media.istockphoto.com/id/1352121918/photo/christmas-new-year-dishes-traditional-festive-salad-with-edible-vegetarian-christmas-trees.jpg?b=1&s=170667a&w=0&k=20&c=uo21pUKhc-aS8Q-GSgexVzID4ABX1bEECG8PY1QEeEg=",
  },
  {
    url: "https://media.istockphoto.com/id/1388791676/photo/teppanyaki-style.jpg?b=1&s=170667a&w=0&k=20&c=8xUJvt6-isVNj9W6OKTkvNPdCjrkYVHYpiP4XBGKelQ=",
  },
  {
    url: "https://media.istockphoto.com/id/1352758440/photo/paper-shopping-food-bag-with-grocery-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=iKgsDK_4spbF8uECRQcmeebr1RSh2SnHDPM3FS2aaco=",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const Cor = () => {
  return (
    <div className="slider_div">
      <SimpleImageSlider
        width={800}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export { Cor };
