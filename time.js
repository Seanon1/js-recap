let time = '0000';

if (time >= '0600' && time < '1200') {
    console.log('Good morning');
} else if (time >= '1200' && time < '1600') {
    console.log('Good afternoon');
} else if (time >= '1600' && time < '2000') {
    console.log('Good evening');
} else if (time >= '2000' && time <= '2359') {
    console.log('Goodnight');
} else {
    console.log("It's late in the night");
}