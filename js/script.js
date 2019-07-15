window.onload = function() {
	//declare consts and set DOM reference

	//SVG Navigation Paths
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

	//Buttons
	const penoyToBridge = document.querySelector('#penoyToBridge');
	const penoyToDaylily = document.querySelector('#penoyToDaylily');
	const penoyToWaterFeature = document.querySelector('#penoyToWaterFeature');
	const bridgeToWaterFeature = document.querySelector('#bridgeToWaterFeature');
	const daylilyToWaterFeature = document.querySelector('#daylilyToWaterFeature');
	const waterFeatureToDaylily = document.querySelector('#waterFeatureToDaylily');
	const bridgeToDaylily = document.querySelector('#bridgeToDaylily');
	const bikeTrail = document.querySelector('#bikeTrail');
	const reset = document.querySelector('#reset');

	//Event Listeners
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

	console.log();
};
