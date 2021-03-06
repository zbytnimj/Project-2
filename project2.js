//
//Three.js
//

//
//cannon.js
//


window.onload = function init()
{
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            var geometry = new THREE.BoxGeometry( 1, 1, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
            var cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 10;
            //camera.position. = 3;

            render();



}

function render() 
{

    gl.clear( gl.COLOR_BUFFER_BIT );
    requestAnimationFrame( render );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
    
}