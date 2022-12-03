AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../bugatti_-_la_voiture_noire/scene.gltf" },
    clickCounter: { type: "number", default: 0 }
  },
  init: function() {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: -5, y: 0, z: 100 };
    const rotation = { x: 0, y: 200, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },
  update: function() {
    window.addEventListener("click", e => {
      this.data.clickCounter = this.data.clickCounter + 1;
      if (this.data.clickCounter === 1) {
        const rotation = { x: 0, y: 160, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 2) {
        const rotation = { x: 0, y: 140, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickCounter === 3) {
        const rotation = { x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } 
      else if (this.data.clickCounter === 4) {
        const rotation = { x: 0, y: 60, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } 
      else if (this.data.clickCounter === 5) {
        const rotation = { x: 0, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } 
      else if (this.data.clickCounter === 6) {
        const rotation = { x: 0, y: -20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }else if (this.data.clickCounter === 7) {
        const rotation = { x: 0, y: -60, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }else if (this.data.clickCounter === 7) {
        const rotation = { x: 0, y: -100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }  else if (this.data.clickCounter === 7) {
        const rotation = { x: 0, y: -140, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else {
        const rotation = { x: 0, y: -180, z: 0 };
        this.el.setAttribute("rotation", rotation);
        const cameraEl = document.querySelector("#camera");
        cameraEl.setAttribute("position", position);
        this.data.clickCounter = 0;
      }
    });
  }
});