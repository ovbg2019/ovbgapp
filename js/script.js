window.onload = function() {
	//declare consts and set DOM reference

	// SVG Navigation Paths
	const penoyToBridgePath = document.querySelector('#penoy_to_bridge');
	const penoyToDaylilyPath = document.querySelector('#penoy_to_daylily');
	const penoyToWaterFeaturePath = document.querySelector('#penoy_to_water_feature');
	const bridgeToWaterFeaturePath = document.querySelector('#bridge_to_water_feature');
	const daylilyToWaterFeaturePath = document.querySelector('#daylily_to_water_feature');
	const waterFeatureToDaylilyPath = document.querySelector('#daylily_to_water_feature');
	const bridgeToDaylilyPath = document.querySelector('#bridge_to_daylily');
	const bikeTrailPath = document.querySelector('#bike_path_dashed');

	// console.log(`penoyToBridgePathLength: ${penoyToBridgePath.getTotalLength()}`);
	// console.log(`penoyToDaylilyPathLength: ${penoyToDaylilyPath.getTotalLength()}`);
	// console.log(`penoyToWaterFeaturePathLength: ${penoyToWaterFeaturePath.getTotalLength()}`);
	// console.log(`waterFeatureToBridgePathLength: ${waterFeatureToBridgePath.getTotalLength()}`);
	// console.log(`waterFeatureToDaylilyPathLength: ${waterFeatureToDaylilyPath.getTotalLength()}`);
	console.log(`bridgeToDaylilyPathLength: ${bridgeToDaylilyPath.getTotalLength()}`);
	// console.log(`bikeTrailPathLength: ${bikeTrailPath.getTotalLength()}`);

	// Buttons
	const penoyToBridge = document.querySelector('#penoyToBridge');
	const penoyToDaylily = document.querySelector('#penoyToDaylily');
	const penoyToWaterFeature = document.querySelector('#penoyToWaterFeature');
	const bridgeToWaterFeature = document.querySelector('#bridgeToWaterFeature');
	const daylilyToWaterFeature = document.querySelector('#daylilyToWaterFeature');
	const waterFeatureToDaylily = document.querySelector('#waterFeatureToDaylily');
	const bridgeToDaylily = document.querySelector('#bridgeToDaylily');
	const reset = document.querySelector('#reset');


	// Tabs
	const tabs = document.querySelectorAll('.tab');
	const tab1BikeTrail = document.querySelector('#tab1BikeTrail');
	const tab2Peony = document.querySelector('#tab2Peony');
	const tab3WaterFeature = document.querySelector('#tab3WaterFeature');
	const tab4Bridge = document.querySelector('#tab4Bridge');
	const tab5Daylily = document.querySelector('#tab5Daylily');
	const tab6MemoryGarden = document.querySelector('#tab6MemoryGarden');

	// Info panel elements
	const titleBar = document.querySelector("#titleBar");
	let activeColor = "";

	// Event listeners for the tab
	// customizing the tab and the panel with the color scheme
	// TO DO: setting the  starting point for the navigation

	tab1BikeTrail.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#EA9154";
		tab1BikeTrail.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	tab2Peony.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#CC7B94";
		tab2Peony.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	tab3WaterFeature.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#3995B1";
		tab3WaterFeature.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	tab4Bridge.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#9D885F";
		tab4Bridge.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	tab5Daylily.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#967EA5";
		tab5Daylily.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	tab6MemoryGarden.addEventListener('click', function() {
		resetTabAppearance();
		activeColor = "#547EAC";
		tab6MemoryGarden.style.backgroundColor = activeColor;
		titleBar.style.backgroundColor = activeColor;
	});

	// Event Listeners
	penoyToBridge.addEventListener('click', function() {
		penoyToBridgePath.classList.add('penoyToBridgeAnimate');
	});

	penoyToDaylily.addEventListener('click', function() {
		penoyToDaylilyPath.classList.add('penoyToDaylilyAnimate');
	});

	penoyToWaterFeature.addEventListener('click', function() {
		penoyToWaterFeaturePath.classList.add('penoyToWaterFeatureAnimate');
	});

	bridgeToWaterFeature.addEventListener('click', function() {
		bridgeToWaterFeaturePath.classList.add('bridgeToWaterFeatureAnimate');
	});

	daylilyToWaterFeature.addEventListener('click', function() {
		daylilyToWaterFeaturePath.classList.add('daylilyToWaterFeatureAnimate');
	});

	waterFeatureToDaylily.addEventListener('click', function() {
		waterFeatureToDaylilyPath.classList.add('waterFeatureToDaylilyAnimate');
	});

	bridgeToDaylily.addEventListener('click', function() {
		bridgeToDaylilyPath.classList.add('bridgeToDaylilyAnimate');
	});

	bikeTrail.addEventListener('click', function() {
		bikeTrailPath.classList.add('bikeTrailAnimate');
	});

	reset.addEventListener('click', function() {
		penoyToBridgePath.classList.remove('penoyToBridgeAnimate');
		penoyToDaylilyPath.classList.remove('penoyToDaylilyAnimate');
		penoyToWaterFeaturePath.classList.remove('penoyToWaterFeatureAnimate');
		bridgeToWaterFeaturePath.classList.remove('bridgeToWaterFeatureAnimate');
		daylilyToWaterFeaturePath.classList.remove('daylilyToWaterFeatureAnimate');
		waterFeatureToDaylilyPath.classList.remove('waterFeatureToDaylilyAnimate');
		bridgeToDaylilyPath.classList.remove('bridgeToDaylilyAnimate');
		bikeTrailPath.classList.remove('bikeTrailAnimate');
	});
	

	// Functions
	function resetTabAppearance() {
		for (let i=0; i<6; i++) {
			tabs[i].style.backgroundColor = "#707070";
			titleBar.style.backgroundColor = "#707070";
		}
	}

	console.log();
};
