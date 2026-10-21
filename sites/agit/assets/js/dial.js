/* ===========================================================================
   THE COST ESTIMATOR — homepage section 02
   Two questions, no form, no email address, a resolved figure.

   WHERE THESE NUMBERS COME FROM, and what has been done to them:

   Source: agit.edu.au/fees-charges, the schedule applying to Letters of Offer
   issued 1 Jan – 30 Jun 2026. Four separate AGIT sources publish four different
   fee structures; this is the most recent and most granular of them, and is the
   one AGIT publishes on its own website today. Nothing here is invented.

   Source A contains five rows whose arithmetic does not reconcile. This file
   handles that as follows, deliberately:

   1. Totals are COMPUTED as tuition + material + application, never copied from
      the published total column. Where the published total disagrees with the
      sum of its own parts (offshore BSB80120: parts make $14,500, table says
      $14,000) the computed figure is shown. Publishing a client's arithmetic
      error back to the public is not a favour to them.

   2. Domestic ICT60220 is shown at $14,000 tuition. The published table gives
      $18,500 tuition against a $15,000 total for three of four IT streams,
      while the fourth stream reads $14,000 / $15,000 and reconciles. $14,000 is
      almost certainly the intended figure. THIS IS AN INFERENCE AND IT IS
      FLAGGED — it must be confirmed before launch.

   3. Per-instalment amounts are NOT displayed. Two published payment plans do
      not sum to their own totals (onshore ICT is $100.50 short; offshore
      BSB80120 is $1,000 short). The instalment COUNT is real and is shown; the
      amounts stay behind the written agreement rather than being published
      wrong.

   Every figure on screen carries the mandatory line: the exact amount is
   confirmed in the written Letter of Offer. That line is not decoration — it is
   what makes an indicative figure publishable at all.
   =========================================================================== */

(function () {
  'use strict';

  var form = document.querySelector('[data-dial]');
  if (!form) return;

  var out = form.querySelector('[data-dial-result]');
  var wait = form.querySelector('[data-dial-wait]');
  if (!out) return;

  var MATERIAL = 750;
  var APPLICATION = 250;

  var COURSES = {
    ICT60220: { name: 'Advanced Diploma of Information Technology', weeks: 104, units: 16 },
    RII60520: { name: 'Advanced Diploma of Civil Construction Design', weeks: 104, units: 12 },
    BSB50420: { name: 'Diploma of Leadership and Management', weeks: 52, units: 12 },
    BSB80120: { name: 'Graduate Diploma of Management (Learning)', weeks: 52, units: 8 }
  };

  /* tuition, and the number of instalments after the initial payment */
  var FEES = {
    offshore: {
      ICT60220: { tuition: 26000, instalments: 7 },
      RII60520: { tuition: 26000, instalments: 7 },
      BSB50420: { tuition: 10500, instalments: 3 },
      BSB80120: { tuition: 13500, instalments: 3 }
    },
    onshore: {
      ICT60220: { tuition: 18500, instalments: 7 },
      RII60520: { tuition: 18500, instalments: 7 },
      BSB50420: { tuition: 10500, instalments: 3 },
      BSB80120: { tuition: 10500, instalments: 3 }
    },
    domestic: {
      ICT60220: { tuition: 14000, instalments: 7, inferred: true },
      RII60520: { tuition: 14000, instalments: 7 },
      BSB50420: { tuition: 6000, instalments: 3 },
      BSB80120: { tuition: 8000, instalments: 3 }
    }
  };

  var WHO = {
    offshore: 'applying from outside Australia',
    onshore: 'already in Australia on a student visa',
    domestic: 'an Australian citizen or permanent resident'
  };

  function money(n) {
    return '$' + n.toLocaleString('en-AU');
  }

  function val(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }

  function render() {
    var course = val('course');
    var who = val('who');

    if (!course || !who) {
      out.hidden = true;
      if (wait) wait.hidden = false;
      return;
    }

    var c = COURSES[course];
    var f = FEES[who][course];
    var total = f.tuition + MATERIAL + APPLICATION;

    var html =
      '<p class="result__ctx">' + c.name + ' &middot; for someone ' + WHO[who] + '</p>' +
      '<dl>' +
        '<div class="row"><dt>Tuition</dt><dd>' + money(f.tuition) + '</dd></div>' +
        '<div class="row"><dt>Material fee</dt>' +
          '<dd>' + money(MATERIAL) + '<span class="verified">Consistent across every source</span></dd></div>' +
        '<div class="row"><dt>Application fee<br><span class="sub">Non-refundable, payable on accepting your offer</span></dt>' +
          '<dd>' + money(APPLICATION) + '<span class="verified">Consistent across every source</span></dd></div>' +
        '<div class="row row--total"><dt>Indicative total</dt><dd>' + money(total) + '</dd></div>' +
      '</dl>' +
      '<dl class="result__meta">' +
        '<div class="row"><dt>Course length</dt><dd>' + c.weeks + ' weeks</dd></div>' +
        '<div class="row"><dt>Units</dt><dd>' + c.units + '</dd></div>' +
        '<div class="row"><dt>Payment</dt><dd>Initial payment + ' + f.instalments + ' instalments</dd></div>' +
      '</dl>' +
      '<p class="honesty"><strong>This is an estimate, not a quote.</strong> It uses the schedule ' +
        'AGIT publishes at <span class="code">/fees-charges/</span> for offers issued in the current ' +
        'period. Instalment amounts are set out in your written agreement. ' +
        '<strong>Your exact total is confirmed in your written Letter of Offer.</strong></p>' +
      '<p class="privacy">We respect your privacy &mdash; your selections are not stored.</p>';

    out.innerHTML = html;
    out.hidden = false;
    if (wait) wait.hidden = true;
  }

  form.addEventListener('change', function (e) {
    if (e.target && e.target.name) render();
  });

  render();
}());
