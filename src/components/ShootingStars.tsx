import React from "react";

const ShootingStars = () => {
  return (
    <section id="startContainer">
      {[...Array(8)].map((item) => (
        <span></span>
      ))}
    </section>
  );
};

export default ShootingStars;
