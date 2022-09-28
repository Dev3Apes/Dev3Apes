import timezone from "./timezones.js";
import lang from "./language.js";
for (let a = 0; a < timezone.length; a++) {
  const element = timezone[a].text;
  const abbr = timezone[a].abbr;

  $("#explore-timezone").append(
    `<div class="form-check">
  <input class="form-check-input" type="radio" name="explore-timezone" id="${abbr}">
  <label class="form-check-label" for="explore-timezone">
    ${element}
  </label>
</div>

        `
  );
}
console.log(lang);
lang.forEach((element) => {
  console.log(element);
  $("#explore-language").append(
    `<div class="form-check">
  <input class="form-check-input" type="radio" name="explore-lang" id="${element.code}">
  <label class="form-check-label" for="explore-lang">
    ${element.name}
  </label>
</div>`
  );
});
