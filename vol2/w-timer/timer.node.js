class Timeer {
  /** The variable that stores the `setTimeout`. */ #timer;
  /** When the timer was last started or resumed. */ #start;
  /** When unpaused, the Unix timestamp at which the timer should go off. */ #when;
  /** When paused, the amount of time left on the clock. */ #in;
  /** The variable that stores the function fed into the constructor. */ #func;
  /** Can either be "going", "paused", "used", or "destroyed". */
  state = "uninitiated";
  /**
   * Executes some code after a set amount of time like `setTimeout`, but can be paused, resumed, and destroyed.
   * @param {Function} func The function to execute when the timer hits 0.
   * @param {int} ms How lond should the timer be, in milliseconds (e.g. 3000 for 3 seconds).
   */
  constructor(func, ms) {
    this.#func = func;
    this.#in = ms;
    this.#start = Date.now();
    this.#timer = setTimeout(()=>{this.#func();this.state="used"}, this.#in);
    this.#when = this.#start + ms;
    this.state = "going";
  }
  /** @returns {int} The amount of time left on the timer, in milliseconds. If it was destroyed, returns 0. */
  time() {
    switch (this.state) {
      case "going": return this.#when - Date.now();
      case "paused": return this.#in;
      default: return 0;
    }
  }
  /** Pauses the timer, if it's going. The whole thing basically freezes until `resume()` is ran. */
  pause() {
    if(this.state !== "going") return;
    clearTimeout(this.#timer);
    this.#in = this.#when - Date.now();
    this.state = "paused";
  }
  /** Resumes the timer, if it was paused beforehand. */
  resume() {
    if(this.state !== "paused") return;
    this.#start = Date.now();
    this.#timer = setTimeout(()=>{this.#func();this.state="used"}, this.#in);
    this.#when = this.#start + this.#in;
    this.state = "going";
  }
  /** Cancels the timer. The function fed into the constuctor will never run. */
  destroy() {
    clearTimeout(this.#timer);
    this.#timer = 0;
    this.#when = Infinity;
    this.#in = Infinity;
    this.#func = ()=>{};
    this.state = "destroyed";
  }
}
const seconds = 30;
const t = new Timeer(()=>{
  console.log("real.");
  process.exit();
},eval(seconds+"e3"));