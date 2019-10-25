/**
 * Entry point of the code
 */
$(document).ready(() => {
    setMoney(0, 0, 0, 0);
});

/**
 * Set the money for each of the coin types, this changes the UI
 * @param {int} platinum 
 * @param {int} gold 
 * @param {int} silver 
 * @param {int} copper 
 */
function setMoney(platinum, gold, silver, copper){
    $('#currentPlatinum').html(platinum + " Pp");
    $('#currentGold').html(platinum + " Gp");
    $('#currentSilver').html(platinum + " Sp");
    $('#currentCopper').html(platinum + " Cp");
}