/* ------------------------------------------------------------------
   HOW TO ADD CONTENT
   Each subject has a "lessons" list. Each lesson has:
     title   - the text on the lesson tab
     content - the lesson itself, written as HTML inside backticks (` `)
   Add or remove lessons by adding or removing { title, content } blocks.
   Useful tags: <h3> heading, <p> paragraph, <ul><li> list,
   <blockquote> for provisions or cases, <strong> for key terms.
------------------------------------------------------------------- */
const SUBJECTS = [
  {
    title: "Law on Business Transactions",
    sub: "Sales and Negotiable Instruments",
    lessons: [
      { title: "Guaranty", content: `<h3>I. Guaranty (Arts. 2047-2081, Civil Code)</h3>
<h4>Nature and Extent</h4>
<ul>
<li><b>Art. 2047:</b> the guarantor binds himself to the creditor to fulfill the principal debtor's obligation if the debtor fails to do so. If he binds himself <i>solidarily</i>, the contract is a <b>suretyship</b>.</li>
<li><b>Characteristics:</b> accessory, subsidiary, unilateral. The guarantor must be a person distinct from the debtor.</li>
<li><b>Guarantor vs. surety:</b> the guarantor's liability is secondary; the surety's is primary (a regular party to the contract).</li>
<li><b>Classifications:</b> personal or real; conventional, legal or judicial (origin); gratuitous or onerous (consideration); single or double/sub-guaranty (person guaranteed); definite or indefinite/simple (scope).</li>
<li><b>Accessory:</b> no valid principal obligation, no guaranty. <i>Exceptions:</i> the guaranty may still stand for voidable or unenforceable contracts and natural obligations.</li>
<li><b>Future debts / conditional obligations:</b> may be secured (continuing guaranty), but the creditor cannot claim against the guarantor until the debt is liquidated and demandable. Pure, suspensive or resolutory obligations may all be guaranteed.</li>
<li><b>Art. 2054, extent:</b> a guarantor may bind himself for less, never for more. An excess is reduced to the principal debt (guaranteeing &#8369;15,000 for a &#8369;10,000 debt = liable for &#8369;10,000).</li>
<li><b>Art. 2049, married woman as guarantor:</b> binds her separate property; with husband's consent she may bind conjugal/community property; without consent, only in cases allowed by law (e.g., benefit to the family). No prohibition against guaranteeing her husband's debt.</li>
<li><b>Art. 2050, guaranty without debtor's knowledge:</b> rules on payment by a third person apply (Arts. 1236-1237). Without the debtor's knowledge or against his will, the guarantor recovers only insofar as the payment benefited the debtor and cannot compel subrogation. With the debtor's knowledge or consent, he is subrogated to the creditor's rights (Art. 2067).</li>
</ul>

<h4>Qualifications and Replacement of Guarantor</h4>
<ul>
<li><b>Art. 2056:</b> integrity, capacity to bind himself, sufficient property; subject to the court's jurisdiction where the obligation is to be fulfilled.</li>
<li>Later loss of these qualifications does <b>not</b> release a guarantor already bound.</li>
<li><b>Art. 2057:</b> the creditor may demand a new guarantor if the old one was convicted in the first instance of a crime involving dishonesty (estafa, theft, perjury) or became insolvent. No judicial declaration of insolvency is needed. <i>Exception:</i> the creditor stipulated a specific person.</li>
</ul>

<h4>Effects: Guarantor and Creditor</h4>
<table>
<tr><th>Rule</th><th>Content</th></tr>
<tr><td>Benefit of excussion (Art. 2058)</td><td>Creditor must first exhaust the debtor's non-exempt property and pursue all legal remedies before demanding from the guarantor.</td></tr>
<tr><td>No excussion (Art. 2059)</td><td>(1) expressly renounced; (2) bound solidarily; (3) debtor insolvent; (4) debtor absconded or cannot be sued in the Philippines without a representative; (5) execution on the debtor's property would not satisfy the debt.</td></tr>
<tr><td>Invoking excussion (Art. 2060)</td><td>(1) raise it promptly on demand (usually in the answer); (2) point out leviable property of the debtor within the Philippines sufficient to pay.</td></tr>
<tr><td>Creditor's negligence (Art. 2061)</td><td>If the creditor fails to proceed against the property pointed out and the debtor becomes insolvent, the guarantor is released to the extent of that property's value.</td></tr>
<tr><td>Suit (Art. 2062)</td><td>Sue the debtor alone (unless Art. 2059 applies). The debtor may ask that the guarantor be notified. A judgment against the debtor alone does not bind a guarantor who got no notice.</td></tr>
<tr><td>Compromise (Art. 2063)</td><td>A compromise between creditor and debtor benefits the guarantor but cannot bind him to heavier burdens without consent. A compromise between creditor and guarantor benefits the debtor but cannot burden him.</td></tr>
<tr><td>Sub-guarantor (Art. 2064)</td><td>Enjoys excussion against both the guarantor and the debtor. The creditor goes to him as a last resort.</td></tr>
<tr><td>Co-guarantors (Art. 2065)</td><td>Same debt, same debtor: liability is <b>joint</b> (divided equally), not solidary. Exceptions: the Art. 2059 grounds.</td></tr>
</table>

<h4>Effects: Debtor and Guarantor</h4>
<ul>
<li><b>Art. 2066, indemnity:</b> total debt paid; legal interest from the time payment was made known to the debtor; expenses incurred after notifying the debtor of the demand; damages if due.</li>
<li><b>Art. 2067, subrogation:</b> the paying guarantor steps into the creditor's rights. If he compromised, he can recover only what he actually paid.</li>
<li><b>Art. 2068, payment without notice:</b> the debtor may set up against the guarantor all defenses he had against the creditor at the time of payment.</li>
<li><b>Art. 2069, premature payment:</b> no reimbursement until the period expires, unless the debtor ratified.</li>
<li><b>Art. 2070, debtor pays again:</b> if the guarantor paid without notice and the debtor, unaware, paid again, the guarantor's remedy is against the creditor only. <i>Exceptions:</i> gratuitous guaranty; guarantor prevented by fortuitous event from notifying; creditor insolvent.</li>
<li><b>Art. 2071, proceeding against the debtor before paying:</b> (1) sued for payment; (2) debtor insolvent; (3) debtor bound himself to release the guarantor within a period that expired; (4) debt became demandable; (5) ten years passed with no fixed maturity; (6) reasonable fear the debtor will abscond; (7) debtor in imminent danger of insolvency. Remedies: obtain release or demand security.</li>
<li><b>Art. 2072:</b> a guarantor acting at another's request for an absent third person's debt may sue either the requester or the debtor for reimbursement.</li>
</ul>

<h4>Extinguishment (Arts. 2076-2080)</h4>
<ul>
<li><b>Art. 2076:</b> guaranty ends with the principal obligation, for the same causes (Art. 1231: payment, loss of the thing, condonation, confusion, compensation, novation; also annulment, rescission, resolutory condition, prescription).</li>
<li><b>Art. 2077:</b> creditor voluntarily accepts property in lieu of money: guarantor released even if the creditor is later evicted.</li>
<li><b>Art. 2078:</b> release of a co-guarantor without the others' consent: the others benefit to the extent of the released share. <i>Example (debt &#8369;9,000; 3 guarantors):</i> A released without B and C's consent: B and C owe &#8369;3,000 each. With both consenting: &#8369;4,500 each. With only B consenting: B &#8369;6,000, C &#8369;3,000.</li>
<li><b>Art. 2079:</b> extension of time to the debtor without the guarantor's consent releases the guarantor. Mere failure to demand is not an extension; there must be a new binding agreement.</li>
<li><b>Art. 2080:</b> even solidary guarantors are released if the creditor's fault makes subrogation impossible (e.g., creditor fails to register or releases the mortgage).</li>
</ul>` },
      { title: "Mortgage", content: `<h3>II. Real Mortgage and Chattel Mortgage</h3>
<h4>Real Mortgage (Arts. 2124-2131)</h4>
<ul>
<li><b>Subject matter (Art. 2124):</b> immovables and alienable real rights imposed upon immovables. Movables go under chattel mortgage.</li>
<li><b>Registration (Art. 2125):</b> must be recorded in the Registry of Property to bind third persons. Unregistered, it still binds the parties (<i>Coca-Cola Bottlers v. Sps. Soriano</i>, G.R. 211232: defects in notarization did not void the mortgage between the parties).</li>
<li><b>Effect (Art. 2126):</b> follows the property into whoever's hands it passes. <b>Extent (Art. 2127):</b> accessions, improvements, growing fruits, rents or income, indemnities, and objects permanently attached, even if added after execution.</li>
<li><b>General rules:</b> the mortgagor must be the absolute owner or have authority (Art. 2085), so one cannot mortgage property not yet owned; a third person may mortgage his own property for another's debt (he does not become the debtor); the mortgage is <b>indivisible</b> (stays on the whole property until the whole debt is paid); the mortgagor stays owner and possessor; no automatic ownership by the creditor on default (<b>pactum commissorium</b> is void).</li>
<li><b>Art. 2128:</b> the mortgage credit may be assigned in whole or in part. <b>Art. 2129:</b> creditor may claim from a third-party possessor the part of the credit secured by the property he holds. <b>Art. 2130:</b> a stipulation forbidding the owner from alienating the mortgaged immovable is void. <b>Art. 2131:</b> governed by the Mortgage Law and Land Registration Law.</li>
</ul>

<h4>Chattel Mortgage (Arts. 2140-2141; Act No. 1508)</h4>
<ul>
<li>Personal property recorded in the Chattel Mortgage Register as security. If the movable is delivered instead of recorded, it is a <b>pledge</b> (Art. 2140). Growing crops and large cattle are deemed personal property.</li>
<li><b>Characteristics:</b> accessory, formal, unilateral.</li>
<li><b>Validity:</b> (1) registered in the Chattel Mortgage Register; (2) if the property is in a province other than the mortgagor's residence, register in both places or the mortgage is void; (3) <b>affidavit of good faith</b> (its absence vitiates the mortgage only against third persons without notice).</li>
<li><b>Governing laws (Art. 2141):</b> Chattel Mortgage Law, Civil Code, Revised Administrative Code, Revised Penal Code, Ship Mortgage Decree. Pledge provisions apply if not in conflict.</li>
<li><b>RPC offenses:</b> (1) removing the mortgaged property to another province or city without the mortgagee's written consent; (2) selling or pledging already mortgaged property without the mortgagee's written consent on the back of the mortgage, registered. The property must be the identical property.</li>
<li><b>Foreclosure:</b> the creditor cannot appropriate the property; he recovers only from the sale proceeds. <b>Application of proceeds (Sec. 14):</b> (1) costs of keeping and sale; (2) the secured obligation; (3) subsequent mortgagees in order; (4) balance to the mortgagor.</li>
<li><b>Redemption (Sec. 13):</b> by the mortgagor, a subsequent mortgagee, or a subsequent attaching creditor, by paying the amount due plus costs before the sale. A redeeming attaching creditor is subrogated to the mortgagee.</li>
</ul>

<table>
<tr><th>Point</th><th>Chattel Mortgage</th><th>Pledge</th></tr>
<tr><td>Ownership</td><td colspan="2">Remains with the borrower in both</td></tr>
<tr><td>Delivery</td><td>Not required</td><td>Required</td></tr>
<tr><td>Registration</td><td>Chattel Mortgage Register required</td><td>Not required</td></tr>
<tr><td>Sale price exceeds debt</td><td>Borrower gets the excess</td><td>Generally no excess to borrower</td></tr>
<tr><td>Sale price less than debt</td><td>Lender may recover the deficiency</td><td>Lender cannot recover the deficiency, despite stipulation</td></tr>
</table>` },
      { title: "NIL Background", content: `<h3>III. The Negotiable Instruments Law: Background</h3>
<ul>
<li><b>Source:</b> Act No. 2031 (Feb. 3, 1911; effective June 2, 1911), patterned on the U.S. Uniform Negotiable Instruments Act of 1896, itself based on the English Bills of Exchange Act of 1882. It replaced Book II of the Code of Commerce (Arts. 443-556), except the provisions on crossed checks.</li>
<li><b>Gaps (Sec. 196):</b> cases not provided for are governed by existing legislation or, in default, by the law merchant. The Civil Code supplies deficiencies only.</li>
<li><b>Purpose:</b> to facilitate, not hinder, commercial paper and promote the free flow of credit (<i>State Investment House v. CA</i>). Doubts are resolved in favor of negotiability.</li>
<li><b>Applicability:</b> only to instruments that meet Sec. 1. Non-negotiable instruments follow ordinary contract rules, though the NIL may apply by analogy (<i>Borromeo v. Sun</i>: Sec. 14 applied by analogy to an assignment of shares signed in blank).</li>
<li><b>Functions:</b> cash substitute (not legal tender), medium of exchange, credit instrument, liquidity through discounting, and added legal protection for transferees. Checks are for immediate payment; notes and bills circulate credit.</li>
<li><b>Features:</b> (1) <b>negotiability</b>: passing from hand to hand like money so the holder in due course takes free from defects of title and personal defenses (<i>Firestone Tire v. CA</i>); (2) <b>accumulation of secondary contracts</b>: each transfer adds a new contract and a new party.</li>
<li><b>Forms:</b> the NIL deals only with promissory notes (a promise) and bills of exchange (an order). A check is a bill of exchange drawn on a bank, payable on demand. Special types: certificates of deposit, bank notes, due bills, bonds (promissory-note types); drafts, trade and banker's acceptances (bill types); debentures.</li>
<li><b>Not governed by the NIL:</b> documents of title (bill of lading, warehouse receipt), letters of credit (in favor of a specified person; but drafts issued under them are negotiable, <i>Lee v. CA</i>), trust receipts, certificates of stock, pawn tickets, treasury warrants, postal money orders.</li>
<li><b>Contract vs. negotiable instrument:</b> negotiation passes the instrument as holder, free of personal defenses; assignment leaves the assignee in the assignor's shoes. A negotiable instrument takes effect only on delivery (Sec. 16). Every negotiable instrument is a contract, but not every contract is a negotiable instrument.</li>
<li><b>Terms:</b> <i>maker</i> (issues a note), <i>drawer</i> (issues a bill), <i>drawee</i> (ordered to pay), <i>payee</i>, <i>acceptor</i> (drawee who assents), <i>bearer</i>, <i>indorser</i>, <i>indorsee</i>, <i>holder</i> (payee or indorsee in possession, or bearer).</li>
<li><b>Test of negotiability:</b> read the whole instrument, only its face, against Sec. 1 (<i>Caltex v. CA</i>: the court looks at the meaning of the words used, not secret intent).</li>
</ul>` },
      { title: "Form (Secs. 1-23)", content: `<h3>IV. Form and Interpretation (Secs. 1-23)</h3>
<h4>Sec. 1: Requisites of Negotiability</h4>
<table>
<tr><th>Requisite</th><th>Key points</th></tr>
<tr><td>(a) Writing, signed by maker or drawer</td><td>No oral negotiable instrument. Signature may appear anywhere, be a mark, initials, stamp or print, if adopted as the signer's own. If the capacity is unclear, the signer is deemed an <b>indorser</b> (Sec. 17[f]). A denied signature is still presumed valid.</td></tr>
<tr><td>(b) Unconditional promise or order to pay a sum certain in money</td><td>Money only (a particular kind of current money may be named, Sec. 6[e]).</td></tr>
<tr><td>(c) Payable on demand or at a fixed/determinable future time</td><td>Applies to notes and bills.</td></tr>
<tr><td>(d) Payable to order or to bearer</td><td>Applies to notes and bills.</td></tr>
<tr><td>(e) Drawee named or indicated with reasonable certainty</td><td>Bills and checks only (e.g., addressed to the "treasurer" of a corporation).</td></tr>
</table>
<blockquote>A note needs (a) to (d); a bill needs (a) to (e).</blockquote>

<h4>Secs. 2-9: The Requisites Explained</h4>
<ul>
<li><b>Sec. 2, sum certain:</b> remains certain even with interest, stated installments, installments with an acceleration clause, exchange (fixed or current rate), or costs of collection and attorney's fees on non-payment.</li>
<li><b>Sec. 3, unconditional:</b> still unconditional if it names a fund for reimbursement or an account to be debited, or states the transaction that gave rise to it. An order or promise to pay <i>out of a particular fund</i> is <b>not</b> unconditional.</li>
<li><b>Sec. 4, determinable future time:</b> a fixed period after date or sight; on or before a fixed or determinable date; a fixed period after an event <b>certain to happen</b> though the time is uncertain (e.g., death of Z). Payable upon a <b>contingency</b> is not negotiable, and the event's happening does not cure it.</li>
<li><b>Sec. 5, additional acts:</b> a promise or order to do any act besides paying money destroys negotiability. <i>Exceptions:</i> authority to sell collateral on non-payment; confession of judgment on default; waiver of benefit of law; holder's option to require some other act in lieu of money. Illegal stipulations are not validated.</li>
<li><b>Sec. 6, omissions:</b> not invalidated by lack of date, lack of value stated, lack of place of drawing or payment, a seal, or naming a particular kind of current money.</li>
<li><b>Sec. 7, on demand:</b> payable on demand, at sight, on presentation, or when no time is expressed.</li>
<li><b>Sec. 8, to order:</b> payable to the order of a specified person (third person, drawer or maker, drawee, joint payees, one or some of several payees, or holder of an office).</li>
<li><b>Sec. 9, to bearer when:</b> (1) expressly so; (2) "to a person or bearer"; (3) to a <b>fictitious or non-existing</b> payee, <i>and the maker knew it</i>; (4) the payee's name does not purport to be a person (e.g., "cash"; <i>Ang Tek Lian v. CA</i>); (5) the only or last indorsement is in blank.</li>
</ul>

<h4>Secs. 10-23: Dates, Blanks, Delivery, Signatures</h4>
<table>
<tr><th>Section</th><th>Rule</th></tr>
<tr><td>10, terms</td><td>Exact statutory words are not required; clear intent to conform is enough. A foreign language or grammatical slip does not destroy negotiability.</td></tr>
<tr><td>11, date</td><td>A stated date is prima facie the true date; the one disputing it bears the burden.</td></tr>
<tr><td>12, antedated/postdated</td><td>Valid unless done for an illegal or fraudulent purpose (e.g., concealing usury, issuing a postdated check without intent to fund it). Title is acquired as of delivery.</td></tr>
<tr><td>13, inserting date</td><td>Where payable a fixed period after date (issued undated) or after sight (undated acceptance), the holder may insert the true date. Not for demand instruments. A wrong date inserted knowingly invalidates the instrument against that person, but a later holder in due course may treat the inserted date as true.</td></tr>
<tr><td>14, blanks</td><td>Delivery of an incomplete instrument is prima facie authority to fill it in, within authority and a reasonable time. A non-HDC enforces it as completed only against parties after completion; an HDC enforces it against all.</td></tr>
<tr><td>15, incomplete and undelivered</td><td>If completed without authority and negotiated, it is not valid against persons who signed before delivery, even as against an HDC (a real defense).</td></tr>
<tr><td>16, delivery</td><td>Every instrument is incomplete and revocable until delivered for the purpose of giving it effect. Delivery by a party in possession's absence is presumed (rebuttable against immediate parties and non-HDCs); as to an HDC, valid delivery by all prior parties is <b>conclusively</b> presumed.</td></tr>
<tr><td>17, construction</td><td>Words prevail over figures (unless the words are ambiguous, then figures control); stipulated interest, else from date (undated: from issue); written prevails over printed; if ambiguous, holder may treat it as note or bill; doubtful capacity = indorser; "I promise" signed by two or more = <b>solidary</b>, "We promise" = <b>joint</b>. These rules apply only when the instrument is ambiguous.</td></tr>
<tr><td>18, trade or assumed name</td><td>Liable as if signed in the real name. A person whose signature is not on the instrument is not liable under the NIL (but may be sued under the general law on obligations).</td></tr>
<tr><td>19, signature by agent</td><td>Authority may be oral or written and proved by simple evidence.</td></tr>
<tr><td>20, agent's liability</td><td>Not personally liable only if (1) authorized, (2) signs expressly as agent, and (3) discloses the principal. Titles alone ("Agent," "Manager") without naming the principal do not excuse (<i>descriptio personae</i>).</td></tr>
<tr><td>21, procuration</td><td>Signing "per procuration" notifies third persons that the agent has limited authority; the principal is bound only if the agent acts within it.</td></tr>
<tr><td>22, infant or corporation</td><td>Indorsement by a minor or a corporation transfers title to the indorsee, but incapacity is a real defense against the indorser, unless ratified or within the charter powers.</td></tr>
<tr><td>23, forgery</td><td>A forged signature is wholly inoperative; no right to enforce or retain payment can be acquired through it, unless the party is precluded from setting up the forgery (by conduct, estoppel or negligence).</td></tr>
</table>` },
      { title: "Consideration (Secs. 24-29)", content: `<h3>V. Consideration and Accommodation (Secs. 24-29)</h3>
<ul>
<li><b>Sec. 24, presumption:</b> every instrument is prima facie issued for valuable consideration, and every signer became a party for value. The presumption is rebuttable; consideration (the cause) differs from motive.</li>
<li><b>Sec. 25, value:</b> any consideration sufficient to support a simple contract; need not be adequate (absent fraud, mistake or undue influence). An antecedent or pre-existing debt, even of a third person, is value.</li>
<li><b>Sec. 26, holder for value:</b> one who gave value, and is a holder for value as to all who became parties <b>before</b> value was given. Presumed holder for value. Example: M to P (no value), P to A (value), A to B: B is a holder for value as to M, P and A.</li>
<li><b>Sec. 27, lien:</b> a holder with a lien (e.g., collateral security) is a holder for value to the extent of the lien. If the instrument exceeds the debt, the pledgee collects, applies, and returns the surplus. Against a personal defense he collects only up to his debt; against a real defense, nothing.</li>
<li><b>Sec. 28, absence or failure of consideration:</b> a personal defense against anyone not an HDC. Partial failure is a defense <i>pro tanto</i> (only 2/3 of the land delivered: note enforceable for 2/3).</li>
</ul>

<h4>Sec. 29: Accommodation Party</h4>
<ul>
<li><b>Requisites:</b> signs as maker, drawer, acceptor or indorser; without receiving value for the signature; to lend his name or credit to another (the <b>accommodated party</b>). Parol evidence may prove accommodation.</li>
<li><b>Liability:</b> liable to a holder for value even if the holder knew he was only an accommodation party. Lack of consideration is no defense against a holder for value. He is in effect a <b>surety</b> (<i>PBC v. Aruego</i>). Solidary accommodation makers are each liable for the whole.</li>
<li><b>Limits:</b> a corporation's accommodation signing is <i>ultra vires</i>; no recovery on an instrument vitiated by illegality of cause.</li>
<li><b>Rights:</b> revoke before the instrument is negotiated for value; reimbursement from the accommodated party after paying; contribution from co-accommodation makers.</li>
</ul>` },
      { title: "Negotiation (Secs. 30-50)", content: `<h3>VI. Negotiation and Indorsement (Secs. 30-50)</h3>
<h4>Transfer and Negotiation</h4>
<ul>
<li><b>Issue</b> is the first delivery of a complete instrument to a person who takes it as holder. <b>Negotiation</b> transfers it so the transferee becomes the holder.</li>
<li><b>Sec. 30, how negotiated:</b> bearer instrument by <b>delivery</b>; order instrument by <b>indorsement of the holder completed by delivery</b>. A payee can be involved in a negotiation (e.g., instrument delivered first to an agent, or returned by a last holder).</li>
<li>An order instrument delivered without indorsement is an <b>assignment</b>: the transferee is not a holder. If indorsement is later obtained, negotiation dates from the actual indorsement.</li>
</ul>
<table>
<tr><th>Negotiation</th><th>Assignment</th></tr>
<tr><td>Only negotiable instruments; governed by the NIL</td><td>Ordinary contracts; Arts. 1624-1635, Civil Code</td></tr>
<tr><td>Transferee is a holder</td><td>Transferee is an assignee</td></tr>
<tr><td>HDC is subject only to real defenses and may get better title than the transferor</td><td>Assignee is subject to real and personal defenses and steps into the assignor's shoes</td></tr>
<tr><td>General indorser warrants solvency of prior parties' liability; not liable without presentment and notice of dishonor</td><td>Assignor does not warrant solvency of prior parties unless stipulated or known; liable without notice of dishonor</td></tr>
</table>

<h4>Indorsement Rules</h4>
<table>
<tr><th>Section</th><th>Rule</th></tr>
<tr><td>31, how made</td><td>Written on the instrument or on an attached paper (<b>allonge</b>). The indorser's signature alone suffices.</td></tr>
<tr><td>32, entire instrument</td><td>Must cover the whole amount. A partial indorsement, or one to two or more indorsees severally, is not a negotiation. Exception: an instrument partly paid may be indorsed as to the residue.</td></tr>
<tr><td>33-35, kinds</td><td><b>Special</b> (names the indorsee; his indorsement needed to negotiate further) vs. <b>blank</b> (payable to bearer; negotiated by delivery). The holder may convert a blank into a special indorsement by writing over the signature.</td></tr>
<tr><td>36-37, restrictive</td><td>Prohibits further negotiation; makes the indorsee an agent; or vests title in trust for another. The mere absence of words of negotiability does not make it restrictive. The indorsee may receive payment, sue, and transfer only if the form authorizes; later indorsees acquire only the first indorsee's title.</td></tr>
<tr><td>38, qualified</td><td>"Without recourse" makes the indorser a mere assignor of title; negotiability is not impaired.</td></tr>
<tr><td>39, conditional</td><td>The payor may disregard the condition and pay the indorsee; but the one taking holds the instrument or proceeds subject to the conditional indorser's rights.</td></tr>
<tr><td>40, bearer instrument, special indorsement</td><td>May still be negotiated by delivery; the special indorser is liable only to holders who make title through his indorsement.</td></tr>
<tr><td>41, two or more payees</td><td>All must indorse, unless they are partners or the indorser has authority for the others.</td></tr>
<tr><td>42, to a "cashier"</td><td>Prima facie payable to the bank or corporation; negotiable by either its or the officer's indorsement.</td></tr>
<tr><td>43, misspelled name</td><td>Indorse as written, and add the proper signature if desired.</td></tr>
<tr><td>44, representative capacity</td><td>May indorse in terms negating personal liability.</td></tr>
<tr><td>45-46, presumptions</td><td>Dated indorsement: date presumed true; undated: presumed negotiated before maturity (needed for HDC status, Sec. 52[b]). Indorsement presumed made at the place where the instrument is dated.</td></tr>
<tr><td>47, continuing negotiability</td><td>Continues until restrictively indorsed or discharged.</td></tr>
<tr><td>48, striking out</td><td>The holder may strike out an unnecessary indorsement; that indorser and all later indorsers are relieved.</td></tr>
<tr><td>49, transfer without indorsement</td><td>Transferee gets the transferor's title and the right to demand the indorsement; HDC status counts only from the actual indorsement. Operates as an equitable assignment.</td></tr>
<tr><td>50, return to prior party</td><td>May reissue and renegotiate, but cannot enforce against an intervening party to whom he was personally liable. Limits: instrument paid by the drawer (payable to a third person); paid by the accommodated party; or discharged when acquired by a prior party (Sec. 119).</td></tr>
</table>
<blockquote>Set-off by a bank (<i>BPI v. CA and Templonuevo</i>, G.R. 136202): the bank-depositor relation is creditor-debtor (simple loan), so a bank may set off if the requisites of legal compensation (Art. 1279) exist, but it must exercise meticulous care because of the fiduciary nature of its business.</blockquote>` },
      { title: "Holder Rights (Secs. 51-59)", content: `<h3>VII. Rights of the Holder (Secs. 51-59)</h3>
<h4>Classes of Holders and Basic Rights</h4>
<ul>
<li><b>In ascending order of rights:</b> ordinary/mere holder (assignee-like; subject to all defenses); holder for value (Sec. 26); holder in due course (HDC, Secs. 52, 57).</li>
<li><b>Sec. 51:</b> the holder may <b>sue in his own name</b>, and payment to him in due course discharges the instrument. <b>Payment in due course:</b> at or after maturity, to the holder, in good faith, without notice of a defect in his title.</li>
<li>A pledgee holding by indorsement has a lien and rights limited by the pledge. A part indorsee (Sec. 32) and a transferee not by issue cannot be HDCs.</li>
</ul>

<h4>Sec. 52: Holder in Due Course (all four required)</h4>
<ol>
<li>Instrument is <b>complete and regular on its face</b> (an incomplete instrument or an apparent alteration puts the buyer on inquiry; an alteration not visible falls under Sec. 124).</li>
<li>Became holder <b>before it was overdue</b> and <b>without notice of prior dishonor</b>. Overdue is after maturity; for a demand instrument, see Sec. 53. Taking on the maturity date is still before overdue. Dishonor is by non-acceptance (bills only, may occur before maturity) or non-payment (at maturity). A dishonored instrument may still be negotiated, but the taker cannot be an HDC by indorsement.</li>
<li>Took it in <b>good faith and for value</b> (good faith = honesty plus absence of suspicious circumstances; a deep discount is a factor; love and affection are not value).</li>
<li>At the time of negotiation, <b>no notice of any infirmity or defect in title</b>.</li>
</ol>
<ul>
<li><b>Payee as HDC:</b> the affirmative view holds a payee may be an HDC; the contrary view requires negotiation, not issue. <b>Drawee:</b> by paying, he is not an HDC; payment discharges the instrument.</li>
<li><b>Sec. 53:</b> a demand instrument negotiated an unreasonable time after issue: the holder is not an HDC.</li>
<li><b>Sec. 54:</b> notice before full payment: HDC only to the extent of the amount already paid (₱100,000 note; paid ₱60,000; learns of defect: HDC for ₱60,000 only; if nothing paid, he is relieved from paying).</li>
<li><b>Sec. 55, defective title:</b> obtained by fraud, duress, force and fear, other unlawful means, illegal consideration; or negotiated in breach of faith or in circumstances amounting to fraud.</li>
<li><b>Sec. 56, notice of defect:</b> actual knowledge of the infirmity, or knowledge of facts making taking amount to <b>bad faith</b>. Mere negligence is not enough (consulting a lawyer first is not bad faith). Taking after a warning that the maker will resist payment, or for a grossly inadequate price (e.g., ₱1,000 for a ₱10,000 note), may show bad faith.</li>
</ul>

<h4>Effects: Secs. 57-59</h4>
<ul>
<li><b>Sec. 57, HDC rights:</b> sue in his own name; receive payment; hold free from defects of title of prior parties and free from <b>personal defenses</b> among prior parties; enforce the <b>full amount</b> against all parties liable.</li>
<li><b>Sec. 58:</b> a non-HDC takes subject to the same defenses as if non-negotiable. <b>Shelter rule:</b> a holder who derives title through an HDC, and is not himself party to any fraud or illegality, has all the rights of that HDC against prior parties.</li>
<li><b>Sec. 59, presumption:</b> every holder is prima facie an HDC. When the title of a prior negotiator is shown to be defective, the <b>burden shifts</b> to the holder to prove he (or one he claims under) is an HDC. This does not help a party who became bound before the defective title arose.</li>
<li><b>Parties:</b> <i>immediate</i> (in direct contract with each other), <i>remote</i> (no direct relation), <i>prior</i> (earlier in the chain).</li>
</ul>
<table>
<tr><th>Real defenses (good against everyone, including an HDC)</th><th>Personal defenses (not good against an HDC)</th></tr>
<tr><td>Incapacity (minority, etc.); illegality of the contract; want of delivery of an incomplete instrument; forgery; want of authority; duress amounting to forgery; <b>fraud in factum</b> (signer did not know what he was signing); fraudulent alteration by a holder; prescription; infirmities apparent on the face; discharge at or after maturity</td><td>Wrong date; wrong filling of blanks; want of delivery (complete instrument); absence or failure of consideration; <b>fraud in inducement</b> (simple fraud); duress, force or fear (not amounting to forgery); unlawful means; illegal consideration; breach of faith; innocent alteration; set-off between immediate parties; discharge before maturity</td></tr>
</table>
<blockquote>Procedure (<i>Unified Financing v. Sps. Tolentino</i>, G.R. 271304, Feb. 24, 2025): the genuineness and due execution of an actionable document are admitted if not specifically denied under oath (Rule 8, Sec. 8), so the original need not be presented; the 25% stipulated interest was reduced to 6% per annum as unconscionable.</blockquote>` },
      { title: "Liabilities (Secs. 60-69)", content: `<h3>VIII. Liabilities of Parties (Secs. 60-69)</h3>
<table>
<tr><th>Party (Section)</th><th>Nature</th><th>Engages / admits</th></tr>
<tr><td><b>Maker</b> (60)</td><td>Primary and unconditional</td><td>Pays according to tenor; admits the payee's existence and <b>capacity to indorse</b>. Cannot set up that the payee is fictitious, a minor, or an ultra vires corporation. Joint makers: each liable for the whole.</td></tr>
<tr><td><b>Drawer</b> (61)</td><td>Secondary</td><td>Admits the payee's existence and capacity to indorse; engages that on due presentment the instrument will be accepted or paid, and if dishonored with due proceedings, he will pay the holder or any compelled indorser. May stipulate to negate or limit his liability. A stop-payment order does not defeat an HDC (<i>Llorente v. Star City</i>, G.R. 212050).</td></tr>
<tr><td><b>Acceptor</b> (62)</td><td>Primary</td><td>Pays per tenor of acceptance; admits the drawer's existence, genuineness of his signature, and capacity and authority to draw; admits the payee's existence and capacity to indorse. Does <b>not</b> admit the genuineness of the indorser's signature. A manager's check is the bank's own obligation, and its issuance is acceptance (<i>Equitable PCI Bank v. Ong</i>, G.R. 156207).</td></tr>
<tr><td><b>Irregular indorser</b> (64)</td><td>Secondary</td><td>Signs in blank <b>before delivery</b> and is not otherwise a party. To third-person payee: liable to payee and all subsequent parties. To order of maker/drawer or to bearer: liable to all after the maker or drawer. Accommodating the payee: liable to all after the payee.</td></tr>
<tr><td><b>Person negotiating by delivery / qualified indorsement</b> (65)</td><td>Warranties only</td><td>Instrument is genuine; he has good title; prior parties had capacity; he knows no fact impairing validity or making it worthless. By delivery alone, the warranty runs only to the <b>immediate transferee</b>.</td></tr>
<tr><td><b>General indorser</b> (66)</td><td>Secondary</td><td>Warrants to all subsequent HDCs the Sec. 65 matters (a-c) plus that the instrument is <b>valid and subsisting</b> at indorsement (this fourth warranty does not help a holder who is party to the illegality); engages that on due presentment it will be accepted or paid, and on dishonor with due proceedings he will pay.</td></tr>
<tr><td><b>Indorser of bearer instrument</b> (67)</td><td>As general indorser</td><td>Indorsement is unnecessary to negotiate a bearer instrument, but one who indorses it incurs all an indorser's liability.</td></tr>
<tr><td><b>Order among indorsers</b> (68)</td><td>Prima facie in order of indorsement</td><td>Evidence of a different agreement is admissible. Joint payees or joint indorsees are deemed to indorse jointly and severally; an express release of one joint indorser discharges the other.</td></tr>
<tr><td><b>Agent or broker</b> (69)</td><td>Sec. 65 warranties</td><td>When negotiating without indorsement, liable unless he discloses the principal <b>and</b> that he acts only as agent. Parol evidence cannot relieve an agent whose indorsement brings him within the section.</td></tr>
</table>
<blockquote>Restrictive indorser (Sec. 36): still liable to his immediate indorsee like an unqualified indorser unless he states otherwise. A later taker is only an ordinary assignee if further negotiation is barred.</blockquote>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Law on Business Transactions.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra1949/ra_386_1949.html" target="_blank" rel="noopener">Civil Code of the Philippines (R.A. 386)</a></td><td>Guaranty (Arts. 2047-2081), Mortgage, Sales</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/28/26194" target="_blank" rel="noopener">Negotiable Instruments Law (Act No. 2031)</a></td><td>Secs. 1-196 (Supreme Court E-Library)</td></tr><tr><td><a href="https://chanrobles.com/actno2031.htm" target="_blank" rel="noopener">Act No. 2031, ChanRobles</a></td><td>Alternative full text</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Chattel Mortgage Law (Act No. 1508)</a></td><td>Search the E-Library for Act No. 1508</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Criminal Law",
    sub: "Revised Penal Code, Book One (Introduction to Art. 4)",
    lessons: [
      { title: "1. Introduction & Sources", content: `<h3>1. Criminal Law: Introduction and Sources</h3>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Criminal law</td><td>The branch of law that defines crimes, treats their nature, and provides their punishment</td></tr>
<tr><td>Crime</td><td>An act or omission in violation of a public law that forbids or commands it</td></tr>
</table>
<h4>Sources of Philippine Criminal Law</h4>
<ol>
<li>The Revised Penal Code (Act No. 3815) and its amendments.</li>
<li>Special penal laws passed by the legislative bodies (Philippine Commission, Assembly, Legislature, National Assembly, Batasang Pambansa, Congress).</li>
<li>Penal presidential decrees issued during Martial Law.</li>
</ol>
<blockquote><b>No common law crimes.</b> An act, however immoral or antisocial, is not a crime unless a penal code or special law defines and punishes it (<i>U.S. v. Taylor</i>). <b>Court decisions are not sources</b> of criminal law: they only interpret and apply the law enacted by the legislature.</blockquote>
<h4>Power to Define and Punish Crimes</h4>
<p>The State may define and punish crimes and set criminal procedure under its <b>police power</b>, with wide discretion (<i>People v. Santiago</i>; <i>U.S. v. Pablo</i>).</p>` },
      { title: "2. Limits & Rights of the Accused", content: `<h3>2. Limits on Penal Legislation and Rights of the Accused</h3>
<h4>Constitutional Limits on Congress (Art. III, Bill of Rights)</h4>
<ol>
<li><b>No ex post facto law or bill of attainder</b> (Sec. 22).</li>
<li><b>No one answers for a crime without due process</b> (Sec. 14(1)). Penal laws must be general in application and must clearly define the punished acts.</li>
</ol>
<h4>Ex Post Facto Law (a law that does any of these)</h4>
<table>
<tr><th>#</th><th>Effect of the law</th></tr>
<tr><td>1</td><td>Makes criminal an act that was innocent when done, and punishes it</td></tr>
<tr><td>2</td><td>Aggravates a crime or makes it greater than when committed</td></tr>
<tr><td>3</td><td>Increases the punishment beyond what the law provided when the crime was committed</td></tr>
<tr><td>4</td><td>Changes the rules of evidence so conviction is possible on less or different proof</td></tr>
<tr><td>5</td><td>Regulates only civil rights and remedies but in effect imposes a penalty for a lawful act</td></tr>
<tr><td>6</td><td>Takes away a protection the accused already earned (former conviction or acquittal, amnesty)</td></tr>
</table>
<p>The test: it is <b>retroactive and prejudicial to the accused</b>. <i>People v. Villaraza:</i> the higher penalty under P.D. 818 for estafa by bouncing checks applies only to offenses committed after its effectivity (Oct. 22, 1985); applying it to a 1974 offense would make it ex post facto (Arts. 21 and 22, RPC).</p>
<blockquote><b>Bill of attainder:</b> a legislative act that inflicts punishment without judicial trial, replacing the court's finding of guilt with a legislative one (<i>People v. Ferrer</i>). <i>Example:</i> a law ordering the arrest and imprisonment of named groups with no trial.</blockquote>
<h4>Rights of the Accused</h4>
<table>
<tr><th>Constitutional (Art. III)</th><th>Statutory</th></tr>
<tr><td>Due process; equal protection; right against unreasonable searches and seizures; right to bail; presumption of innocence; right to be heard, to counsel, to be informed of the accusation, to a speedy, impartial and public trial, to meet witnesses face to face, to compulsory process; right against self-incrimination; right against double jeopardy; no excessive fines, cruel or unusual punishment.</td><td>Rights given by law such as the Rules of Court and special statutes (for example, the right to appeal, and rights during custodial investigation).</td></tr>
</table>
<p><b>Waivable vs. non-waivable:</b> a personal right that exists for the accused's benefit (for example, confrontation of witnesses) may be waived; a right founded on public policy or the integrity of the process (for example, a court's jurisdiction over the subject matter) cannot be waived.</p>` },
      { title: "3. Characteristics of Criminal Law", content: `<h3>3. Characteristics of Criminal Law</h3>
<table>
<tr><th>Characteristic</th><th>Meaning</th><th>Exceptions</th></tr>
<tr><td><b>General</b></td><td>Binds all persons who live or sojourn in Philippine territory, regardless of citizenship</td><td>Treaties and treaty stipulations (e.g., Visiting Forces Agreement); laws of preferential application (e.g., R.A. 75 protecting diplomats); public international law (heads of state, ambassadors and their staff; a consul is not exempt absent a treaty)</td></tr>
<tr><td><b>Territorial</b></td><td>Penal laws apply only within Philippine territory</td><td>Art. 2 RPC (see tab 4)</td></tr>
<tr><td><b>Prospective</b></td><td>A penal law cannot make punishable an act done before its enactment</td><td>When the new law is <b>favorable to the accused</b> (Art. 22), unless he is a habitual delinquent</td></tr>
</table>
<h4>Jurisdiction of Civil vs. Military Courts</h4>
<ul>
<li>Civil courts keep jurisdiction over crimes by military personnel unless the law gives the case to a military court. They have <b>concurrent jurisdiction</b> with military tribunals over many offenses even in wartime, where the military court cannot act (<i>Sweet</i> case).</li>
<li>When a military court takes cognizance of a case it must be one within its statutory jurisdiction; offenders accused of war crimes are tried by the proper tribunals under special law.</li>
</ul>
<h4>Effect of Repeal of a Penal Law</h4>
<table>
<tr><th>Situation</th><th>Effect</th></tr>
<tr><td>Absolute repeal (offense no longer a crime)</td><td>The offense ceases to be criminal; pending cases are dismissed; a convict may be released</td></tr>
<tr><td>Re-enactment (new law penalizes the same act)</td><td>Prosecution continues under the new law (the old penalty may still apply if the new one is heavier, to avoid ex post facto effect)</td></tr>
<tr><td>Repealing law fails to penalize the offense</td><td>The accused is acquitted (e.g., failure to file a sales return after the Tax Code dropped the requirement)</td></tr>
<tr><td>New law omits something in the old law</td><td>The omitted act is no longer punishable</td></tr>
</table>
<h4>Construction of Penal Laws</h4>
<ul>
<li>Penal laws are construed <b>strictly against the State and liberally in favor of the accused</b>. No one is brought within a penal statute unless the act is clearly within its terms (<i>People v. Garcia</i>: selling tickets of a lottery not covered by the statute led to acquittal).</li>
<li>For the Revised Penal Code, the <b>original Spanish text prevails</b> over a faulty English translation.</li>
</ul>` },
      { title: "4. The Revised Penal Code & Art. 2", content: `<h3>4. The Revised Penal Code: History, Theories and Territorial Scope</h3>
<h4>History and Structure</h4>
<ul>
<li>A committee of jurists revised the old (Spanish) Penal Code; the Revised Penal Code (Act No. 3815) took effect on <b>January 1, 1932</b>. It did not codify all penal laws, and it is not the latest word in criminology.</li>
<li><b>Book One:</b> general provisions (basic principles on crimes, persons liable, penalties). <b>Book Two:</b> specific felonies and their penalties.</li>
</ul>
<h4>Classical vs. Positivist Theory</h4>
<table>
<tr><th></th><th>Classical</th><th>Positivist</th></tr>
<tr><td>Basis of liability</td><td>Man is a free moral agent; the <b>act</b> is punished</td><td>Man is shaped by his environment; the <b>criminal</b> is studied</td></tr>
<tr><td>Penalty</td><td>Retributive; proportionate to the harm</td><td>Reformative; individualized</td></tr>
<tr><td>Emphasis</td><td>Free will, intent</td><td>Determinism, social defense</td></tr>
</table>
<p>The Code is based mainly on the <b>classical theory</b>, with some positivist features (impossible crimes, indeterminate sentence, juvenile delinquency rules).</p>
<h4>Art. 2: Application of the Code Outside Philippine Territory</h4>
<p>The Code is enforced within the Philippines and also against those who:</p>
<ol>
<li>Commit an offense on a <b>Philippine ship or aircraft</b> (registered in the Philippines and under its flag; the rule is that of the nationality of the vessel, not distance from shore).</li>
<li><b>Forge or counterfeit</b> Philippine coins or currency notes, or obligations and securities issued by the Government.</li>
<li>Are <b>public officers or employees</b> who commit crimes in the exercise of their functions (e.g., falsification, malversation).</li>
<li>Commit crimes <b>against national security and the law of nations</b> (Title One, Book Two: treason, espionage, piracy, etc.).</li>
</ol>
<p><b>Mnemonic: S-F-P-N</b> (Ship, Forgery, Public officers, National security).</p>
<h4>Foreign Merchant Vessels: the English Rule</h4>
<table>
<tr><th>Rule</th><th>Position</th></tr>
<tr><td>French rule</td><td>Crimes aboard a foreign merchant vessel in port are left to the flag state, unless the peace of the port is disturbed</td></tr>
<tr><td><b>English rule (followed in the Philippines)</b></td><td>The local State has jurisdiction over crimes aboard a foreign merchant vessel in its waters, <b>unless</b> the crime merely affects the internal order of the ship</td></tr>
</table>
<ul>
<li>Mere <b>possession</b> of opium aboard a foreign vessel in transit is <i>not</i> a breach of public order (it is not triable here); <b>smoking</b> it in Philippine waters <i>is</i> (it affects the community) (<i>U.S. v. Look Chaw</i>; <i>U.S. v. Ah Sing</i>).</li>
<li><b>Warships</b> are always territory of their flag state.</li>
<li>A <b>continuing crime</b> that is carried into Philippine waters may be prosecuted here.</li>
</ul>` },
      { title: "5. Felonies (Art. 3)", content: `<h3>5. Felonies (Art. 3)</h3>
<p><b>Felonies</b> are acts and omissions punishable by the Revised Penal Code. They are committed by <b>deceit (dolo)</b> or by <b>fault (culpa)</b>.</p>
<h4>Elements</h4>
<table>
<tr><th>Element</th><th>Notes</th></tr>
<tr><td>1. An <b>act or omission</b></td><td>Act = bodily movement tending to produce a result; it must be <b>external</b> (thoughts alone are not punished) and defined by the Code. Omission = failure to perform a positive duty that the law requires (a duty must exist; mere moral duty is not enough).</td></tr>
<tr><td>2. <b>Punishable by the RPC</b></td><td>No felony without a law punishing it</td></tr>
<tr><td>3. Committed by <b>dolo or culpa</b></td><td>Voluntariness: freedom, intelligence, and intent (or fault)</td></tr>
</table>
<h4>Intentional vs. Culpable Felonies</h4>
<table>
<tr><th></th><th>Dolo (intentional)</th><th>Culpa (culpable)</th></tr>
<tr><td>Act</td><td>Malicious</td><td>Not malicious; no intent to injure</td></tr>
<tr><td>Voluntary?</td><td>Intent to do the act and to cause the injury</td><td>Voluntary act, but result from imprudence, negligence, lack of foresight or skill</td></tr>
<tr><td>Basis of liability</td><td>Criminal intent</td><td>Fault (Art. 365)</td></tr>
</table>
<p><b>Imprudence</b> shows deficiency of action; <b>negligence</b> shows deficiency of perception. Acts done negligently are voluntary. Some crimes cannot be committed through imprudence (e.g., those requiring intent to gain).</p>
<h4>The Three Requisites of Dolo</h4>
<ol>
<li><b>Freedom</b> (no irresistible force or uncontrollable fear)</li>
<li><b>Intelligence</b> (no insanity or minority exemption)</li>
<li><b>Intent</b> (purpose to commit the act, shown by overt acts)</li>
</ol>
<p>All three must be present. Intent is a mental state, shown by overt acts and the surrounding circumstances (e.g., intent to kill from the weapon used, the part of the body hit, the manner of the attack). <b>Criminal intent is presumed</b> from an unlawful act, but the presumption does not arise where the facts show a lack of intent, and there is no felony by dolo where intent is absent (for example, an honest mistake of fact).</p>
<h4>Mistake of Fact</h4>
<p><b>Ignorance of the law excuses no one; honest mistake of fact does.</b> It is a misapprehension of fact that, if true, would make the act lawful. Requisites: (1) the act done would have been <b>lawful had the facts been as the accused believed</b>; (2) the intention is lawful; (3) the mistake is <b>without fault or carelessness</b>.</p>
<table>
<tr><th>Case</th><th>Facts and holding</th></tr>
<tr><td><b>U.S. v. Ah Chong</b></td><td>A cook, awakened in the dark by a man forcing the door, believed he was a robber and killed him; it was his roommate. <b>Acquitted:</b> had the facts been as believed, he would have acted in self-defense, and the mistake was innocent, with no fault.</td></tr>
<tr><td><b>People v. Oanis</b></td><td>Constabulary men killed a man they believed was a notorious criminal, without any warning or aggression. <b>Guilty of murder:</b> the mistake was due to their own fault; no circumstance justified the killing.</td></tr>
</table>
<p>Ah Chong vs. Oanis: innocent, reasonable mistake (acquittal) vs. mistake caused by carelessness (liability).</p>
<h4>Error in Personae; Aberratio Ictus; Praeter Intentionem (preview of Art. 4)</h4>
<ul>
<li><b>Error in personae:</b> mistake in the identity of the victim.</li>
<li><b>Aberratio ictus:</b> mistake in the blow.</li>
<li><b>Praeter intentionem:</b> injurious result greater than intended.</li>
</ul>
<h4>Mala in Se vs. Mala Prohibita</h4>
<table>
<tr><th></th><th>Mala in se</th><th>Mala prohibita</th></tr>
<tr><td>Nature</td><td>Wrong by nature</td><td>Wrong because the law prohibits it</td></tr>
<tr><td>Source</td><td>Revised Penal Code</td><td>Special laws</td></tr>
<tr><td>Intent</td><td><b>Required</b> (good faith is a defense)</td><td>Generally <b>not required</b>; the mere act is punished</td></tr>
<tr><td>Modifying circumstances</td><td>Apply</td><td>Do not apply (unless the special law adopts the Code)</td></tr>
<tr><td>Stages and participation</td><td>Attempted, frustrated, consummated; principals, accomplices, accessories</td><td>Generally only consummated; all are liable as principals</td></tr>
</table>
<h4>Intent vs. Motive</h4>
<table>
<tr><th>Intent</th><th>Motive</th></tr>
<tr><td>Purpose to use a particular means to achieve a result; an element of dolo</td><td>The moving power (reason) behind the act</td></tr>
<tr><td>Presumed from the act</td><td>Not an element; need not be proved</td></tr>
</table>
<p><b>Motive</b> becomes important where the <b>identity</b> of the offender is in doubt, or where the evidence is <b>circumstantial</b> or the act is equivocal. It is proved by evidence of previous quarrels, threats, relationships. Proof of motive does not substitute for proof of guilt.</p>` },
      { title: "6. Criminal Liability (Art. 4)", content: `<h3>6. Criminal Liability (Art. 4)</h3>
<h4>The Two Paragraphs</h4>
<table>
<tr><th>Par.</th><th>Rule</th></tr>
<tr><td><b>Par. 1</b></td><td>Criminal liability is incurred by any person <b>committing a felony</b> although the wrongful act done be different from that intended</td></tr>
<tr><td><b>Par. 2</b></td><td>Liability for <b>impossible crimes</b>: an act that would be an offense against persons or property but is not accomplished because of the <b>inherent impossibility</b> of its accomplishment or the employment of inadequate or ineffectual means</td></tr>
</table>
<p><b>Rationale (Par. 1):</b> <i>el que es causa de la causa es causa del mal causado</i>: he who is the cause of the cause is the cause of the evil caused (<i>People v. Ural</i>). A person is not freed because he did not intend the result of his illegal act (<i>U.S. v. Brobst</i>).</p>
<h4>Requisites of Par. 1</h4>
<ol>
<li>A <b>felony has been committed</b> (by dolo, not by special law, not culpa).</li>
<li>The wrong done to the aggrieved party is the <b>direct, natural and logical consequence</b> of the felony (proximate cause).</li>
</ol>
<h4>No Felony, No Liability for the Result</h4>
<ul>
<li>Not a felony: an act not punished by the Code (e.g., attempted suicide: A, trying to kill himself by jumping, falls on and kills a passerby, and is not liable for homicide) (<i>U.S. v. Villanueva</i>: snatching a bolo from curiosity; <i>People v. Bindoy</i>: struggle over a bolo).</li>
<li>Not a felony: an act covered by a <b>justifying circumstance</b> (Art. 11). A person who fires in self-defense and accidentally hits a bystander is not liable for the bystander's death.</li>
<li>If the wrong results from imprudence, apply <b>Art. 365</b>, not Art. 4. A violator of a special law who causes injury (e.g., <i>U.S. v. Divino</i>, a non-physician who treated a girl and burned her) is liable for the injuries through imprudence and the special-law offense.</li>
</ul>
<h4>Three Situations Under "Although the Wrongful Act Be Different"</h4>
<table>
<tr><th>Situation</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>Error in personae</b></td><td>Mistake in the victim's identity</td><td>A stabs in the dark a man he thinks is E; it is G. He is liable for the injury to G.</td></tr>
<tr><td><b>Aberratio ictus</b></td><td>Mistake in the blow; the aimed-at victim is missed and another is hit</td><td>A fires at B, misses, and hits C. He is liable for C's injury.</td></tr>
<tr><td><b>Praeter intentionem</b></td><td>The injurious result is greater than intended</td><td>A punches D, who falls and dies. A is liable for homicide, with the mitigating circumstance of lack of intent to commit so grave a wrong (Art. 13(3)).</td></tr>
</table>
<h4>Proximate Cause</h4>
<p>Proximate cause is that cause which, in the natural and continuous sequence, unbroken by any efficient intervening cause, produces the injury, and without which the result would not have occurred.</p>
<ul>
<li>The offender is liable even if the death is aggravated by the victim's weak constitution, lack of medical care, or the victim's own reaction (e.g., jumping in fright) that was a natural consequence of the attack.</li>
<li>He is <b>not liable</b> for consequences from a distinct act or fact <b>absolutely foreign</b> to the criminal act (<i>People v. Rellin</i>), i.e., an efficient intervening cause.</li>
<li>A <b>blow that accelerates death</b> makes the offender liable for the resulting death.</li>
<li>Death from a wound is attributable to the assailant when: (1) the victim was in <b>normal health</b>; (2) death may be <b>expected</b> from the injuries; (3) death ensued within a <b>reasonable time</b> (<i>People v. Datu Baginda</i>; <i>People v. Tammang</i>: a pupil whipped and hurled against a post died three days later; had he died of hydrophobia, that would have been an intervening cause).</li>
<li><b>Bus case (Bataclan v. Medina):</b> a bus overturned, gasoline leaked, rescuers with a torch started a fire that burned trapped passengers. The proximate cause was the <b>overturning of the bus</b> (negligence of the driver); the rescuers' torch was a natural, foreseeable response to the emergency, not an efficient intervening cause.</li>
</ul>
<h4>Solved Problems</h4>
<p><b>Problem 6.1.</b> A, intending to kill B, fires but hits C, who dies. Liability?<br><b>Answer:</b> Murder or homicide (aberratio ictus) as to C. A is liable because he was committing a felony, and C's death is the direct, natural and logical consequence of the act.</p>
<p><b>Problem 6.2.</b> A fires at B in lawful self-defense but kills a bystander, D. Liability?<br><b>Answer:</b> None for D's death. A was not committing a felony; self-defense is a justifying circumstance (Art. 11).</p>
<p><b>Problem 6.3.</b> A stabs V, who is rushed to the hospital but dies days later because a surgeon commits a gross error unrelated to the wound. Liability?<br><b>Answer:</b> Depends on whether the wound was mortal. If the wound was fatal, A is liable for homicide (medical negligence does not break the chain). If the wound was slight and the death was due solely to the grossly negligent treatment (an efficient intervening cause), A is liable only for the injury.</p>` },
      { title: "7. Cases & Quick Review", content: `<h3>7. Cases and Quick Review</h3>
<table>
<tr><th>Case</th><th>Doctrine</th></tr>
<tr><td>U.S. v. Taylor</td><td>No common law crimes in the Philippines</td></tr>
<tr><td>People v. Santiago; U.S. v. Pablo</td><td>Power to define and punish crimes belongs to the State (police power)</td></tr>
<tr><td>People v. Villaraza</td><td>An increased penalty cannot apply retroactively (ex post facto)</td></tr>
<tr><td>People v. Ferrer</td><td>Bill of attainder: punishment without trial</td></tr>
<tr><td>In re Kay Villegas Kami</td><td>Definition of ex post facto law</td></tr>
<tr><td>People v. Garcia</td><td>Penal laws are construed strictly against the State</td></tr>
<tr><td>U.S. v. Ah Chong</td><td>Honest and reasonable mistake of fact exempts from liability</td></tr>
<tr><td>People v. Oanis</td><td>A mistake due to fault or carelessness does not exempt</td></tr>
<tr><td>U.S. v. Brobst; People v. Ural</td><td>One is liable for the natural consequences of an illegal act, intended or not</td></tr>
<tr><td>U.S. v. Villanueva; People v. Bindoy</td><td>No felony committed, so no liability for the unintended injury</td></tr>
<tr><td>U.S. v. Divino</td><td>Non-physician who injures a patient: liable for imprudence plus the special-law offense</td></tr>
<tr><td>People v. Datu Baginda; People v. Tammang</td><td>Requisites for liability for death from injuries; hydrophobia would be an intervening cause</td></tr>
<tr><td>People v. Rellin</td><td>No liability for results from a distinct act foreign to the crime</td></tr>
<tr><td>Bataclan v. Medina</td><td>Proximate cause: overturning of the bus, not the rescuers' torch</td></tr>
</table>
<h4>Quick Check</h4>
<ol>
<li>Sources of criminal law? <i>RPC, special penal laws, penal presidential decrees. Not court decisions.</i></li>
<li>Three characteristics? <i>General, territorial, prospective.</i></li>
<li>When is a penal law given retroactive effect? <i>When favorable to the accused (Art. 22), unless he is a habitual delinquent.</i></li>
<li>Four cases covered by Art. 2? <i>Philippine ship or aircraft; forgery of currency and securities; public officers in their functions; crimes against national security and the law of nations.</i></li>
<li>Three requisites of dolo? <i>Freedom, intelligence, intent.</i></li>
<li>Elements of mistake of fact? <i>Lawful if facts were as believed; lawful intention; no fault or carelessness.</i></li>
<li>Requisites of Art. 4(1)? <i>A felony committed; the wrong is the direct, natural and logical consequence.</i></li>
</ol>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Criminal Law.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/acts/act1930/act_3815_1930b.html" target="_blank" rel="noopener">Revised Penal Code (Act No. 3815)</a></td><td>Book One, Arts. 1-113</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2017/ra_10951_2017.html" target="_blank" rel="noopener">R.A. 10951</a></td><td>Adjusted amounts of fines and property values in the RPC</td></tr><tr><td><a href="https://ldr.senate.gov.ph/legislative-issuance/act-no-3815" target="_blank" rel="noopener">Act No. 3815, Senate LDR</a></td><td>Alternative full text</td></tr><tr><td><a href="https://lawphil.net/consti/cons1987.html" target="_blank" rel="noopener">1987 Constitution</a></td><td>Full text, Lawphil Project</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Income Taxation",
    sub: "LIT 305 · Law on Income Taxation (organized review)",
    lessons: [
      { title: "1. General Principles", content: `<h3>1. General Principles of Taxation</h3>
<h4>1.1 Nature, Characteristics and Purposes</h4>
<p><b>Taxation</b> is the inherent power of the State to demand enforced contributions from persons, property and rights within its jurisdiction for the support of the government and for public purposes. It exists without a constitutional grant; the Constitution only <i>limits</i> it.</p>
<table>
<tr><th>Characteristics (7)</th><th>Purposes (R-R-P-R-E-P)</th></tr>
<tr><td>Forced charge (ad invitum); apportioned by a reasonable rule (ability to pay); pecuniary burden; imposed on persons, property or excises within the jurisdiction; levied by the legislature; for a public purpose; personal to the taxpayer.</td><td>Revenue; Regulatory; Promotion of general welfare; Reduction of inequality; Encourage economic growth; Protectionism.</td></tr>
</table>
<h4>1.2 Taxation vs. Police Power vs. Eminent Domain</h4>
<table>
<tr><th>Basis</th><th>Taxation</th><th>Police Power</th><th>Eminent Domain</th></tr>
<tr><td>Purpose</td><td>Raise revenue</td><td>Promote general welfare</td><td>Take property for public use</td></tr>
<tr><td>Amount</td><td>Generally unlimited</td><td>Cost of regulation</td><td>Just compensation</td></tr>
<tr><td>Benefit received</td><td>Indirect (protection, services)</td><td>Indirect (general welfare)</td><td>Direct (just compensation)</td></tr>
<tr><td>Non-impairment clause</td><td>Inferior to it</td><td>Superior to it</td><td>Inferior to it</td></tr>
<tr><td>Transfer</td><td>Money becomes public funds</td><td>No transfer; property restrained</td><td>Property goes to the State</td></tr>
</table>
<blockquote><b>Manila Memorial Park v. DSWD (G.R. 175356, Dec. 3, 2013):</b> the 20% senior citizen discount (taken as a tax <i>deduction</i>, not a credit) is an exercise of <b>police power</b>, so no peso-for-peso reimbursement is required.</blockquote>
<h4>1.3 Inherent Limitations (S-P-I-N-E)</h4>
<table>
<tr><th>Limitation</th><th>Meaning / authority</th></tr>
<tr><td><b>S</b>itus / territoriality</td><td>Tax only within the State's jurisdiction (<i>Air Canada v. CIR</i>).</td></tr>
<tr><td><b>P</b>ublic purpose</td><td>No tax for purely private benefit (<i>Pascual v. Sec. of Public Works</i>).</td></tr>
<tr><td><b>I</b>nternational comity</td><td>A State may not tax a co-equal sovereign; treaties are respected (<i>Deutsche Bank v. CIR</i>: treaty relief is not defeated by a late BIR filing requirement).</td></tr>
<tr><td><b>N</b>on-delegability</td><td>Only Congress taxes. Exceptions: LGUs, the President (tariffs), administrative agencies (subordinate rule-making).</td></tr>
<tr><td><b>E</b>xemption of government</td><td>Government generally does not tax itself.</td></tr>
</table>
<h4>1.4 Constitutional Limitations</h4>
<ul>
<li><b>Due process</b> (not arbitrary or confiscatory); <b>equal protection</b> (reasonable classification; <i>Ormoc Sugar v. Treasurer</i>: a tax naming one company is class legislation); <b>uniformity and equity</b> (progressive system).</li>
<li><b>Non-impairment</b> of contracts; <b>religious freedom</b> (no license tax on religious materials, <i>American Bible Society</i>); <b>freedom of the press</b> (general VAT valid, <i>Tolentino</i>).</li>
<li><b>Exemption</b> of properties actually, directly and exclusively used for religious, charitable and educational purposes; <b>no imprisonment</b> for non-payment of a poll/community tax.</li>
</ul>
<h4>1.5 Requisites of a Valid Tax (U-J-I-P)</h4>
<p><b>U</b>niform; within <b>J</b>urisdiction; not violating <b>I</b>nherent or constitutional limitations; for a <b>P</b>ublic purpose.</p>
<h4>1.6 Tax vs. Other Exactions</h4>
<table>
<tr><th>Exaction</th><th>Distinguishing feature</th><th>Non-payment</th></tr>
<tr><td>Tax</td><td>Revenue; unlimited in amount</td><td>Business stays legal; civil/administrative remedies</td></tr>
<tr><td>License fee</td><td>Police power; limited to cost of regulation</td><td>Business becomes illegal</td></tr>
<tr><td>Toll</td><td>Compensation for use of property</td><td>Civil action</td></tr>
<tr><td>Special assessment</td><td>On land specially benefited by an improvement</td><td>Lien on the land</td></tr>
<tr><td>Debt</td><td>Contractual; assignable; may be set off</td><td>No imprisonment (unless from a crime)</td></tr>
</table>
<h4>1.7 Doctrines</h4>
<ul>
<li><b>Lifeblood theory:</b> taxes are the lifeblood of government; exemptions are construed strictly; courts generally will not enjoin collection. But collection must follow the law (<i>CIR v. Algue</i>: proven, reasonable fees are deductible).</li>
<li><b>Construction:</b> tax statutes are construed strictly against the government and liberally for the taxpayer. <i>Exception:</i> exemptions, exclusions, refunds and amnesties are strictly against the taxpayer (<i>strictissimi juris</i>).</li>
<li><b>Double taxation:</b> <i>direct</i> (prohibited) needs <u>all six</u>: same property, same purpose, same authority, same jurisdiction, same period, same kind of tax. Otherwise it is <i>indirect</i> (allowed), e.g., 20% final tax and 5% GRT on bank interest; VAT (national) plus local business tax.</li>
</ul>
<table>
<tr><th></th><th>Tax avoidance</th><th>Tax evasion</th></tr>
<tr><td>Validity</td><td>Legal</td><td>Illegal</td></tr>
<tr><td>Means</td><td>Lawful tax-saving device</td><td>Fraud, deceit, concealment</td></tr>
<tr><td>Penalty</td><td>None</td><td>Criminal and civil fraud penalty</td></tr>
</table>
<p><b>Elements of evasion (CIR v. Estate of Toda):</b> (1) an end to pay less than what is legally due; (2) a bad-faith, willful state of mind; (3) an unlawful course of action. A sham two-step sale is evasion.</p>
<h4>Solved Problems</h4>
<p><b>Problem 1.1.</b> Distinguish a tax from a license fee.<br><b>Solution:</b> By <i>purpose</i> (revenue vs. regulation), <i>amount</i> (unlimited vs. limited to regulatory cost), and <i>effect of non-payment</i> (business stays legal vs. becomes illegal).</p>
<p><b>Problem 1.2.</b> Mr. P donates half of his rental property to a tax-exempt school (donor's tax exempt), reducing his rental tax. Avoidance or evasion?<br><b>Solution:</b> <b>Tax avoidance.</b> The means is lawful, the donation is real and not a sham, and there is no fraud or concealment. The elements of evasion (bad faith and unlawful means) are absent.</p>` },
      { title: "2. Income Tax Foundations", content: `<h3>2. Income Tax: Foundations</h3>
<h4>2.1 Concept and System</h4>
<p>Income tax is an <b>excise tax</b> on the privilege of earning income, not a tax on property. <b>Income</b> is the <i>flow</i> of wealth in a definite period; <b>capital</b> is the <i>fund</i> that produces it (<i>Madrigal v. Rafferty</i>: capital is the tree, income the fruit).</p>
<table>
<tr><th>System</th><th>Description</th></tr>
<tr><td>Global</td><td>All income lumped together, one rate</td></tr>
<tr><td>Schedular</td><td>Each category taxed at its own rate</td></tr>
<tr><td><b>Semi-global (Philippines)</b></td><td>Combination: graduated rates on compensation/business/professional income, with schedular final taxes on passive income, capital gains, etc.</td></tr>
</table>
<h4>2.2 Three Tests for Taxability</h4>
<ol><li><b>Existence</b> of income (gain, not return of capital).</li><li><b>Realization</b>: earning process complete and an exchange has occurred. Mere appreciation is not income (<i>CIR v. Filinvest</i>).</li><li><b>Recognition</b>: actual or constructive receipt; not exempt or excluded.</li></ol>
<h4>2.3 Classification of Taxpayers (Sec. 23)</h4>
<p><b>Rule:</b> classify the taxpayer first. It tells you (1) what income is taxable, (2) whether the base is net or gross, (3) the rate.</p>
<table>
<tr><th>Taxpayer</th><th>Income within PH</th><th>Income outside PH</th><th>Base</th><th>Rate</th></tr>
<tr><td>Resident citizen (RC)</td><td>Taxed</td><td>Taxed</td><td>Net</td><td>0-35%</td></tr>
<tr><td>Non-resident citizen (NRC), OFW, seaman</td><td>Taxed</td><td>Not taxed</td><td>Net</td><td>0-35%</td></tr>
<tr><td>Resident alien (RA)</td><td>Taxed</td><td>Not taxed</td><td>Net</td><td>0-35%</td></tr>
<tr><td>NRA engaged in trade/business (NRA-ETB): more than 180 days</td><td>Taxed</td><td>Not taxed</td><td>Net</td><td>0-35%</td></tr>
<tr><td>NRA not engaged (NRA-NETB): 180 days or less</td><td>Taxed</td><td>Not taxed</td><td>Gross</td><td>25% final</td></tr>
<tr><td>Domestic corporation (DC)</td><td>Taxed</td><td>Taxed</td><td>Net</td><td>25% (20% if small)</td></tr>
<tr><td>Resident foreign corporation (RFC)</td><td>Taxed</td><td>Not taxed</td><td>Net</td><td>25%</td></tr>
<tr><td>Non-resident foreign corporation (NRFC)</td><td>Taxed</td><td>Not taxed</td><td>Gross</td><td>25% final</td></tr>
</table>
<blockquote><b>Worldwide income rule:</b> only <u>resident citizens and domestic corporations</u> are taxed on income from within and without. All others: Philippine-source only.</blockquote>
<blockquote><b>Air Canada v. CIR:</b> an offline carrier selling tickets through a local agent is a resident foreign corporation taxed on Philippine-source income (subject to treaty), not on Gross Philippine Billings.</blockquote>
<h4>2.4 Situs (Source) of Income (Sec. 42)</h4>
<table>
<tr><th>Income</th><th>Situs</th></tr>
<tr><td>Compensation / services</td><td>Where performed</td></tr>
<tr><td>Rent</td><td>Location of the property</td></tr>
<tr><td>Royalties</td><td>Where the intangible is used</td></tr>
<tr><td>Sale of personal property (merchandising)</td><td>Place of sale</td></tr>
<tr><td>Gain on sale of real property</td><td>Location of the property</td></tr>
<tr><td>Interest</td><td>Residence of the debtor</td></tr>
<tr><td>Dividends from a domestic corporation</td><td>Within the Philippines</td></tr>
<tr><td>Gain on sale of shares of a domestic corporation</td><td>Within the Philippines</td></tr>
<tr><td>Goods produced abroad, sold in PH (or the reverse)</td><td>Partly within, partly without; allocate proportionately (Sec. 42(E))</td></tr>
</table>
<h4>Solved Problems</h4>
<p><b>Problem 2.1.</b> A Japanese tourist stays 45 days and wins <b>&#8369;2,000,000</b> in a Philippine casino. Tax?<br><b>Solution:</b> (1) Classify: alien, 45 days (not more than 180), not in business = <b>NRA-NETB</b>. (2) Base and rate: gross PH-source income, <b>25% final</b>, no deductions. (3) Tax = &#8369;2,000,000 &times; 25% = <b>&#8369;500,000</b>, withheld at source.</p>
<p><b>Problem 2.2.</b> A bought land in 1995 for &#8369;1,000,000; by 2024 it is worth &#8369;9,000,000. A received an offer but did not sell. Income in 2024?<br><b>Solution:</b> None. The &#8369;8,000,000 increase is unrealized appreciation; there was no closed transaction (<i>Madrigal; Filinvest</i>). Gain arises only on actual disposition.</p>
<p><b>Problem 2.3.</b> Ms. B, a non-resident citizen, makes bags in Bulacan and sells in Manila. Separately, an alien makes bags in China and sells in Manila.<br><b>Solution:</b> (a) Produced and sold in PH: all PH-source, fully taxable. (b) Produced abroad, sold in PH: only the portion allocable to the PH sale is PH-source (Sec. 42(E)).</p>` },
      { title: "3. Gross Income", content: `<h3>3. Gross Income and Its Components</h3>
<h4>3.1 Concept (Sec. 32(A))</h4>
<p><b>Gross income</b> is all income from whatever source derived: compensation, business/professional income, gains from dealings in property, interest, rents, royalties, dividends, annuities, prizes and winnings, pensions, and a partner's distributive share from a GPP. The list is not exclusive. Source (legal or illegal) does not matter; income received under a claim of right is taxable. <i>BIR v. First E-Bank Tower:</i> condominium dues held in trust are not income.</p>
<h4>3.2 Compensation Income</h4>
<p>All remuneration for services of an employee, unless excluded. Taxed at graduated rates with withholding. <b>Employer's convenience rule:</b> lodging, meals and uniforms furnished mainly for the employer's convenience are not income to the employee.</p>
<h4>3.3 Fringe Benefits</h4>
<table>
<tr><th>Recipient</th><th>Treatment</th></tr>
<tr><td>Rank-and-file</td><td>Part of compensation; taxed to the employee at graduated rates</td></tr>
<tr><td>Managerial / supervisory</td><td>Fringe Benefit Tax (FBT), a <b>final tax paid by the employer</b></td></tr>
</table>
<table>
<tr><th>Recipient</th><th>Divisor</th><th>FBT rate</th></tr>
<tr><td>Citizen, resident alien, NRA-ETB</td><td>65%</td><td>35%</td></tr>
<tr><td>NRA-NETB</td><td>75%</td><td>25%</td></tr>
</table>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0"><b>Formula:</b> GMV = Monetary value &divide; divisor &nbsp;|&nbsp; FBT = GMV &times; FBT rate &nbsp;|&nbsp; Employer's deductible expense = full GMV</p>
<p><b>Exempt from FBT:</b> benefits to rank-and-file; de minimis; employer contributions to retirement, insurance and hospitalization plans; benefits required by the nature of, or necessary to, the business; benefits for the employer's convenience; those exempted by law.</p>
<h4>3.4 Professional and Business Income</h4>
<p><b>Professional income:</b> practice of a profession, no employer-employee relationship. <b>Business income:</b> merchandising, manufacturing, mining, farming.</p>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0">Net sales = Gross sales &minus; returns &minus; discounts &minus; allowances &nbsp;|&nbsp; Gross income (trading) = Net sales &minus; Cost of goods sold</p>
<h4>3.5 Dealings in Property</h4>
<table>
<tr><th>Asset</th><th>Definition</th><th>Examples</th></tr>
<tr><td>Ordinary (S-O-U-R)</td><td>Stock-in-trade; held for sale in the <b>O</b>rdinary course; <b>U</b>sed in business (depreciable); <b>R</b>eal property used in business</td><td>Inventory, machinery, commercial building</td></tr>
<tr><td>Capital</td><td>Everything not ordinary</td><td>Family home, personal car, jewelry, shares held by a non-dealer</td></tr>
</table>
<p><b>Rules on capital assets:</b> (1) capital losses are deductible only against capital gains; (2) <b>holding period</b>: held more than 12 months, only 50% of gain/loss is recognized, <u>individuals only</u>; (3) net capital loss carry-over (NCLCO) for individuals, to the next year only; (4) the holding period and NCLCO <u>do not apply</u> to real property or shares of stock.</p>
<table>
<tr><th>Transaction</th><th>Tax</th></tr>
<tr><td>Shares of a domestic corporation <b>not</b> traded on the exchange</td><td>15% CGT on net capital gain</td></tr>
<tr><td>Shares traded on the exchange</td><td>Stock transaction tax (a percentage tax, not income tax): <b>0.1%</b> of gross selling price since July 1, 2025 (R.A. 12214 / CMEPA; formerly 0.6%)</td></tr>
<tr><td>Real property (capital asset) in PH</td><td>6% CGT on the <b>higher</b> of selling price, zonal value or assessor's FMV (gain is presumed)</td></tr>
<tr><td>Real property sold to the government</td><td>Option: 6% CGT or graduated rates</td></tr>
</table>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0"><b>Formulas:</b> CGT (real property) = 6% &times; higher of (selling price, zonal value, FMV) &nbsp;|&nbsp; CGT (unlisted shares) = 15% &times; (selling price &minus; cost)</p>
<h4>3.6 Interest, Dividends, Royalties</h4>
<table>
<tr><th>Item</th><th>Recipient</th><th>Treatment</th></tr>
<tr><td>Interest on PH bank deposits / deposit substitutes</td><td>Individuals</td><td>20% final tax. (CMEPA standardized a single 20% rate on interest; the former exemption for long-term deposits of 5 years or more no longer applies. Verify with your professor's latest module.)</td></tr>
<tr><td rowspan="5">Dividends from a domestic corporation</td><td>RC, RA</td><td>10% final</td></tr>
<tr><td>NRA-ETB</td><td>20% final</td></tr>
<tr><td>NRA-NETB</td><td>25% final</td></tr>
<tr><td>Domestic corp / RFC</td><td>Exempt (inter-corporate dividend)</td></tr>
<tr><td>NRFC</td><td>25%, or 15% under the <b>tax sparing rule</b></td></tr>
<tr><td>Royalties</td><td>Individuals</td><td>10% final on books, literary works, musical compositions; 20% final on others</td></tr>
</table>
<blockquote><b>Fisher v. Trinidad:</b> stock dividends are not income when received (no flow of wealth; interest unchanged). <b>Tax sparing:</b> the reduced 15% applies if the NRFC's home country gives a deemed-paid credit for the difference or does not tax the dividend.</blockquote>
<h4>3.7 Rent and Leasehold Improvements</h4>
<p>Advance rentals are taxable on receipt. If the lessee's improvement passes to the lessor at lease-end, the lessor may use:</p>
<table>
<tr><th>Method</th><th>Income reported</th></tr>
<tr><td>Outright</td><td>FMV of the improvement, in the year completed</td></tr>
<tr><td>Spread-out</td><td>Book value at lease-end &divide; remaining lease term, each year</td></tr>
</table>
<h4>3.8 Prizes, Annuities, Pensions, Insurance</h4>
<ul>
<li><b>Prizes over &#8369;10,000</b> (in PH): 20% final tax. <b>&#8369;10,000 or less:</b> part of gross income, graduated rates.</li>
<li><b>Exempt prizes:</b> for religious, charitable, scientific, educational, artistic, literary or civic achievement (no action to enter, no future service required); athletic prizes under national sports associations.</li>
<li><b>Annuities:</b> return of premium is excluded; the earnings portion is taxable.</li>
<li><b>Life insurance proceeds</b> on death: excluded. Interest on proceeds held by the insurer: taxable.</li>
</ul>
<h4>Solved Problems</h4>
<p><b>Problem 3.1 (FBT).</b> A resident-citizen VP enjoys a company car; monetary value for the quarter is <b>&#8369;32,500</b>.<br><b>Solution:</b> GMV = 32,500 &divide; 0.65 = <b>&#8369;50,000</b>. FBT = 50,000 &times; 35% = <b>&#8369;17,500</b>, paid by the employer (not deducted from salary). Employer deducts &#8369;50,000.</p>
<p><b>Problem 3.2 (FBT, NRA-NETB).</b> Housing benefit with monetary value &#8369;15,000 to a managerial NRA-NETB.<br><b>Solution:</b> GMV = 15,000 &divide; 0.75 = 20,000. FBT = 20,000 &times; 25% = <b>&#8369;5,000</b>.</p>
<p><b>Problem 3.3 (gross income).</b> Gross sales &#8369;5,000,000; returns &#8369;200,000; discounts &#8369;100,000; COGS &#8369;2,700,000.<br><b>Solution:</b> Net sales = 5,000,000 &minus; 200,000 &minus; 100,000 = 4,700,000. Gross income = 4,700,000 &minus; 2,700,000 = <b>&#8369;2,000,000</b>.</p>
<p><b>Problem 3.4 (CGT, real property).</b> Selling price &#8369;3,000,000; zonal value &#8369;3,500,000; assessor's FMV &#8369;2,800,000.<br><b>Solution:</b> Base = highest = 3,500,000. CGT = 3,500,000 &times; 6% = <b>&#8369;210,000</b>. Actual gain or loss is irrelevant.</p>
<p><b>Problem 3.5 (unlisted shares).</b> Held 5 years; cost &#8369;1,000,000; sold outside the exchange for &#8369;1,800,000.<br><b>Solution:</b> Gain = 800,000. Holding period does <u>not</u> apply to shares. CGT = 800,000 &times; 15% = <b>&#8369;120,000</b>.</p>
<p><b>Problem 3.6 (holding period).</b> An individual sells a capital asset (not real property or shares) at a &#8369;200,000 gain after 3 years, and another at a &#8369;60,000 loss after 4 months.<br><b>Solution:</b> Long-term gain recognized at 50% = 100,000. Short-term loss recognized at 100% = 60,000. Net capital gain = 100,000 &minus; 60,000 = <b>&#8369;40,000</b>, taxed at graduated rates.</p>
<p><b>Problem 3.7 (leasehold, both methods).</b> 10-year lease; cash rent &#8369;600,000/yr; lessee builds a &#8369;6,000,000 building (life 30 years) that goes to the lessor at lease-end.<br><b>Solution (spread-out):</b> Depreciation = 6,000,000 &divide; 30 &times; 10 = 2,000,000; book value = 4,000,000; annual income = 4,000,000 &divide; 10 = 400,000; total yearly rental income = 400,000 + 600,000 = <b>&#8369;1,000,000</b>.<br><b>Solution (outright):</b> year of completion = 6,000,000 + 600,000 = <b>&#8369;6,600,000</b>; later years &#8369;600,000 only.</p>` },
      { title: "4. Exclusions & Exempt Income", content: `<h3>4. Exclusions from Gross Income (Sec. 32(B))</h3>
<p>Exclusions are never part of gross income: they are a return of capital, taxed elsewhere, or exempted by law. They are construed strictly against the taxpayer. <b>Exclusion</b> (never in gross income) differs from <b>deduction</b> (subtracted from gross income).</p>
<table>
<tr><th>Item</th><th>Rule</th></tr>
<tr><td>Life insurance proceeds on death; return of premiums</td><td>Excluded. Interest on proceeds held by the insurer is taxable.</td></tr>
<tr><td>Gifts, bequests, devises, inheritances</td><td>Excluded; <b>income from them is taxable</b></td></tr>
<tr><td>Compensation for injuries or sickness</td><td>Excluded (damages for personal injury; not lost profits)</td></tr>
<tr><td>Income exempt under treaty</td><td>Excluded</td></tr>
<tr><td>Retirement benefits (R.A. 7641 or BIR-approved plans)</td><td>Excluded if the legal conditions are met</td></tr>
<tr><td>Separation pay for causes beyond the employee's control (retrenchment, redundancy, illness, death)</td><td>Excluded. Voluntary resignation does not qualify.</td></tr>
<tr><td>13th month pay and other benefits</td><td>Excluded up to <b>&#8369;90,000</b> total; excess is taxable</td></tr>
<tr><td>De minimis benefits (rice, uniform, etc. within ceilings)</td><td>Excluded and <u>not</u> counted against the &#8369;90,000 ceiling</td></tr>
<tr><td>GSIS, SSS, PhilHealth, Pag-IBIG contributions and benefits</td><td>Excluded</td></tr>
<tr><td>Minimum wage earners (statutory minimum wage, holiday, overtime, night differential, hazard pay)</td><td>Exempt from income tax on those items</td></tr>
</table>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0"><b>Formula:</b> Taxable compensation = Basic salary + taxable allowances + (13th month and other benefits &minus; &#8369;90,000, if positive) &minus; mandatory contributions (SSS, PhilHealth, Pag-IBIG)</p>
<h4>Solved Problems</h4>
<p><b>Problem 4.1.</b> An employee, retrenched, receives &#8369;800,000 separation pay and &#8369;50,000 annuity interest.<br><b>Solution:</b> Separation pay for a cause beyond his control is excluded. Annuity earnings are taxable. Gross income = <b>&#8369;50,000</b>.</p>
<p><b>Problem 4.2.</b> Ms. Navarro: basic salary &#8369;600,000; 13th month &#8369;50,000; Christmas bonus &#8369;30,000; de minimis rice and uniform allowances &#8369;24,000; taxable allowances &#8369;40,000. Employer withheld on &#8369;680,000. Correct taxable compensation and tax?<br><b>Solution:</b> 13th month + bonus = 80,000, within the 90,000 ceiling, so excluded. De minimis excluded. Taxable = 600,000 + 40,000 = <b>&#8369;640,000</b> (the employer overstated by 40,000). Tax = 22,500 + 20% &times; (640,000 &minus; 400,000) = 22,500 + 48,000 = <b>&#8369;70,500</b>.</p>` },
      { title: "5. Deductions", content: `<h3>5. Deductions from Gross Income</h3>
<h4>5.1 General Rules</h4>
<p>Deductions are allowed only by law and strictly construed. An expense must be (a) <b>paid or incurred</b> in the taxable year, (b) <b>connected</b> with the trade, business or profession, (c) <b>substantiated</b> by adequate records, and (d) <b>not contrary to law or public policy</b>. Bribes, kickbacks and "facilitation fees" are never deductible (<i>3M Philippines v. CIR</i>). Brand-building advertising is a capital expenditure (<i>CIR v. General Foods</i>).</p>
<blockquote><b>Withholding requirement repealed.</b> Sec. 34(K), which denied a deduction when the required withholding tax was not paid, was repealed by the Ease of Paying Taxes Act (R.A. 11976, effective Jan. 22, 2024). For taxable years from 2024, an expense is deductible even if no tax was withheld, provided it is ordinary, necessary, substantiated and related to the registered business.</blockquote>
<h4>5.2 The Itemized Deductions (C-R-E-D3-I-T-L-P)</h4>
<table>
<tr><th>Item</th><th>Key rule / formula</th></tr>
<tr><td><b>C</b>haritable contributions</td><td>Ceiling: <b>5%</b> (individual) or <b>10%</b> (corporation) of taxable income before the contribution. Fully deductible to accredited / priority donees.</td></tr>
<tr><td><b>R</b>esearch and development</td><td>Deduct outright, or defer and amortize over at least 60 months</td></tr>
<tr><td><b>E</b>xpenses (ordinary and necessary)</td><td>Ordinary, necessary, reasonable, substantiated, connected to business. Entertainment, amusement and recreation (EAR) is subject to a ceiling (below).</td></tr>
<tr><td><b>D</b>epreciation</td><td>Reasonable allowance for wear and tear over useful life</td></tr>
<tr><td><b>D</b>epletion</td><td>Mines, oil and gas wells</td></tr>
<tr><td><b>D</b>ebts (bad debts)</td><td>Ascertained worthless in the year, charged off. Recovery is taxable (tax benefit rule).</td></tr>
<tr><td><b>I</b>nterest</td><td>Reduced by <b>20% of interest income</b> subjected to final tax (tax arbitrage rule). Not deductible between related taxpayers (Sec. 36(B)).</td></tr>
<tr><td><b>T</b>axes</td><td>Deductible except income tax, estate and donor's tax, VAT (input), special assessments, and foreign income tax if credited</td></tr>
<tr><td><b>L</b>osses</td><td>Actually sustained, not compensated by insurance; casualty, theft, NOLCO</td></tr>
<tr><td><b>P</b>ension trust</td><td>Current service cost plus past service cost amortized over 10 years</td></tr>
</table>
<h4>5.3 Formulas for the Computational Items</h4>
<table>
<tr><th>Item</th><th>Formula</th></tr>
<tr><td>EAR ceiling (sale of goods)</td><td><b>0.5%</b> &times; net sales</td></tr>
<tr><td>EAR ceiling (sale of services)</td><td><b>1%</b> &times; net revenues</td></tr>
<tr><td>Allowed EAR</td><td>Lower of actual EAR and the ceiling</td></tr>
<tr><td>Straight-line depreciation</td><td>(Cost &minus; salvage value) &divide; useful life</td></tr>
<tr><td>Depletion</td><td>(Cost of the property &divide; estimated recoverable units) &times; units extracted</td></tr>
<tr><td>Interest deduction</td><td>Interest expense &minus; (20% &times; interest income subjected to final tax)</td></tr>
<tr><td>Charitable ceiling</td><td>5% or 10% &times; (taxable income before the contribution)</td></tr>
<tr><td>Casualty loss</td><td>Loss sustained (cost or adjusted basis, as applicable) &minus; insurance or indemnity received</td></tr>
<tr><td>Bad debt</td><td>Amount ascertained worthless and written off in the year (no reserve method)</td></tr>
</table>
<h4>5.4 Net Operating Loss Carry-Over (NOLCO)</h4>
<ul>
<li>A net operating loss of a <b>business</b> may be carried over as a deduction for the <b>next 3 consecutive taxable years</b> (5 years for losses of 2020 and 2021 under the Bayanihan laws).</li>
<li>Requisites: the loss was not from a year the taxpayer was exempt; no substantial change in ownership (at least 75% of paid-up capital / outstanding shares held by the same persons).</li>
<li>FIFO: the earliest loss is applied first. Not available to NRA-NETB or NRFC (taxed on gross).</li>
</ul>
<h4>5.5 Optional Standard Deduction (OSD)</h4>
<table>
<tr><th>Taxpayer</th><th>OSD</th></tr>
<tr><td>Individual</td><td><b>40% of gross sales or gross receipts</b> (net of returns, allowances, discounts)</td></tr>
<tr><td>Corporation</td><td><b>40% of gross income</b></td></tr>
</table>
<p>Elected in the first quarterly return; irrevocable for the year. No substantiation needed. Not available to NRA-NETB and NRFC (taxed on gross), or to GPPs as such (partners may avail on their distributive share) and compensation earners.</p>
<h4>5.6 Non-Deductible Items</h4>
<p>Personal, living or family expenses; capital expenditures (unless allowed through depreciation); premiums on life insurance where the taxpayer is directly or indirectly a beneficiary; losses and interest between related parties (Sec. 36(B)); bribes and kickbacks; income taxes, estate and donor's taxes; unsubstantiated items.</p>
<h4>Solved Problems</h4>
<p><b>Problem 5.1 (bribes).</b> ABC Corp. claims &#8369;6,000,000 expenses, including &#8369;300,000 "facilitation fees" for a permit.<br><b>Solution:</b> Facilitation fees are bribes (Sec. 34(A)(1)(c)), not deductible. Allowable = 6,000,000 &minus; 300,000 = <b>&#8369;5,700,000</b>.</p>
<p><b>Problem 5.2 (individual charitable).</b> Net income before contribution &#8369;2,000,000; donated &#8369;150,000 to a non-accredited charity.<br><b>Solution:</b> Ceiling = 5% &times; 2,000,000 = 100,000. Deduction = lower of 150,000 and 100,000 = <b>&#8369;100,000</b>.</p>
<p><b>Problem 5.3 (corporate charitable).</b> Net income before contribution &#8369;3,000,000; donation &#8369;500,000 to a non-accredited donee.<br><b>Solution:</b> Ceiling = 10% &times; 3,000,000 = 300,000. Deductible = <b>&#8369;300,000</b>.</p>
<p><b>Problem 5.4 (EAR).</b> Service firm: net revenues &#8369;4,000,000; EAR incurred &#8369;65,000.<br><b>Solution:</b> Ceiling = 1% &times; 4,000,000 = 40,000. Deductible = <b>&#8369;40,000</b>; the &#8369;25,000 excess is disallowed.</p>
<p><b>Problem 5.5 (interest arbitrage).</b> Hilaga Corp. paid &#8369;1,000,000 interest; it earned &#8369;200,000 bank interest subjected to 20% final tax.<br><b>Solution:</b> Reduction = 20% &times; 200,000 = 40,000. Deductible interest = 1,000,000 &minus; 40,000 = <b>&#8369;960,000</b>.</p>
<p><b>Problem 5.6 (depreciation).</b> Machine cost &#8369;1,200,000; salvage &#8369;200,000; life 5 years.<br><b>Solution:</b> (1,200,000 &minus; 200,000) &divide; 5 = <b>&#8369;200,000 per year</b>.</p>
<p><b>Problem 5.7 (depletion).</b> Mine cost &#8369;10,000,000; estimated 2,000,000 tons; 150,000 tons extracted this year.<br><b>Solution:</b> (10,000,000 &divide; 2,000,000) &times; 150,000 = 5 &times; 150,000 = <b>&#8369;750,000</b>.</p>
<p><b>Problem 5.8 (NOLCO).</b> Tanglaw Corp. lost &#8369;3,000,000 in 2026. Income before NOLCO: 2027 &#8369;1,200,000; 2028 &#8369;800,000; 2029 &#8369;600,000.<br><b>Solution:</b></p>
<table><tr><th>Year</th><th>Income before NOLCO</th><th>NOLCO applied</th><th>Unused balance</th></tr>
<tr><td>2027</td><td>1,200,000</td><td>1,200,000</td><td>1,800,000</td></tr>
<tr><td>2028</td><td>800,000</td><td>800,000</td><td>1,000,000</td></tr>
<tr><td>2029</td><td>600,000</td><td>600,000</td><td>400,000 (expires)</td></tr></table>
<p>Taxable income is zero in each year, and the unused &#8369;400,000 lapses after the third year.</p>
<p><b>Problem 5.9 (OSD vs. itemized).</b> Atty. Cruz: gross receipts &#8369;4,000,000; documented expenses &#8369;1,200,000.<br><b>Solution:</b> Itemized: 4,000,000 &minus; 1,200,000 = 2,800,000. OSD: 40% &times; 4,000,000 = 1,600,000; taxable income = 2,400,000. OSD gives the lower taxable income, so <b>elect the OSD</b> (and avoid substantiation).</p>` },
      { title: "6. Individuals", content: `<h3>6. Taxation of Individuals</h3>
<h4>6.1 Graduated Rates (effective January 1, 2023)</h4>
<table>
<tr><th>Annual taxable income</th><th>Tax</th></tr>
<tr><td>Not over &#8369;250,000</td><td>0%</td></tr>
<tr><td>Over &#8369;250,000 to &#8369;400,000</td><td>15% of the excess over &#8369;250,000</td></tr>
<tr><td>Over &#8369;400,000 to &#8369;800,000</td><td>&#8369;22,500 + 20% of the excess over &#8369;400,000</td></tr>
<tr><td>Over &#8369;800,000 to &#8369;2,000,000</td><td>&#8369;102,500 + 25% of the excess over &#8369;800,000</td></tr>
<tr><td>Over &#8369;2,000,000 to &#8369;8,000,000</td><td>&#8369;402,500 + 30% of the excess over &#8369;2,000,000</td></tr>
<tr><td>Over &#8369;8,000,000</td><td>&#8369;2,202,500 + 35% of the excess over &#8369;8,000,000</td></tr>
</table>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0"><b>Taxable income:</b> Compensation earner = gross compensation &minus; exclusions &minus; mandatory contributions. Self-employed = gross income &minus; itemized deductions (or &minus; OSD). Mixed income = taxable compensation + net business/professional income.</p>
<h4>6.2 The 8% Option (Sec. 24(A)(2)(b))</h4>
<table>
<tr><th>Point</th><th>Rule</th></tr>
<tr><td>Who may elect</td><td>Self-employed individuals and professionals whose gross sales/receipts and other non-operating income <b>do not exceed &#8369;3,000,000</b> (the VAT threshold); not VAT-registered</td></tr>
<tr><td>Who may not</td><td>Purely compensation earners; VAT-registered taxpayers; those whose receipts exceed &#8369;3,000,000; GPP partners (as to GPP income); NRA-NETB</td></tr>
<tr><td>Effect</td><td>Replaces <b>both</b> the graduated income tax and the 3% percentage tax. No itemized deduction or OSD.</td></tr>
<tr><td>Purely self-employed</td><td>8% &times; (gross receipts + other non-operating income &minus; <b>&#8369;250,000</b>)</td></tr>
<tr><td>Mixed-income earner</td><td>Compensation: graduated rates on taxable compensation. Business: 8% &times; <b>gross</b> receipts, with <u>no</u> &#8369;250,000 deduction (it is already used by the compensation)</td></tr>
<tr><td>Election</td><td>Declared in the first quarter return (or the initial quarterly percentage tax return); irrevocable for the year</td></tr>
</table>
<h4>6.3 Non-Resident Aliens</h4>
<table>
<tr><th>Category</th><th>Test</th><th>Tax</th></tr>
<tr><td>NRA-ETB</td><td>Stays in PH <b>more than 180 days</b> in the calendar year</td><td>Graduated rates on net PH-source income</td></tr>
<tr><td>NRA-NETB</td><td><b>180 days or less</b></td><td>25% final on gross PH-source income; no deductions</td></tr>
<tr><td>Special aliens (RHQ/ROHQ, offshore banking units, petroleum service contractors)</td><td>Employed by those entities</td><td>Special rate on gross compensation (15% under the special laws; check the module)</td></tr>
</table>
<h4>6.4 Substituted Filing and Who Must File</h4>
<p>An employee need not file an annual return if: (1) pure compensation income, (2) <b>one employer</b> for the year, (3) tax withheld equals tax due, and (4) the employer files BIR Form 1604-CF and issues Form 2316. <b>Two employers in the year defeat substituted filing.</b></p>
<table>
<tr><th>Must file</th><th>Need not file</th></tr>
<tr><td>Compensation earners with two or more employers; self-employed; mixed-income earners; those with income not subject to final tax and not withheld on; employee whose employer under-withheld or over-withheld and who seeks a refund</td><td>Minimum wage earners; individuals whose income is wholly subject to final tax; NRC with only foreign-source income; single-employer compensation earner with correct withholding</td></tr>
</table>
<h4>Solved Problems</h4>
<p><b>Problem 6.1 (graduated).</b> Resident-citizen employee, taxable income &#8369;900,000.<br><b>Solution:</b> Bracket &#8369;800,000 to 2,000,000: 102,500 + 25% &times; (900,000 &minus; 800,000) = 102,500 + 25,000 = <b>&#8369;127,500</b>.</p>
<p><b>Problem 6.2 (mixed income, no 8%).</b> Ms. Lim: taxable compensation &#8369;700,000; net business income &#8369;1,300,000.<br><b>Solution:</b> Total = 2,000,000. Tax = 102,500 + 25% &times; 1,200,000 = 102,500 + 300,000 = <b>&#8369;402,500</b>.</p>
<p><b>Problem 6.3 (8% vs. graduated).</b> Mr. Tan, designer, not VAT-registered: gross receipts &#8369;2,400,000; expenses &#8369;900,000.<br><b>Solution:</b> (a) 8% option: 8% &times; (2,400,000 &minus; 250,000) = <b>&#8369;172,000</b>. (b) Graduated: taxable income 1,500,000; tax = 102,500 + 25% &times; 700,000 = 277,500; plus 3% percentage tax = 72,000; total <b>&#8369;349,500</b>. <b>Elect the 8% option.</b></p>
<p><b>Problem 6.4 (sari-sari store).</b> Gross sales &#8369;2,800,000; cost of sales &#8369;1,500,000; operating expenses &#8369;400,000; not VAT-registered.<br><b>Solution:</b> (a) Graduated: gross income 1,300,000; taxable income 900,000; tax 127,500; plus 3% percentage tax 84,000 = <b>&#8369;211,500</b>. (b) 8%: 8% &times; (2,800,000 &minus; 250,000) = <b>&#8369;204,000</b>. The 8% option is slightly lower and simpler. With high expenses the result can flip, so compute both.</p>
<p><b>Problem 6.5 (mixed-income earner, 8%).</b> Taxable compensation &#8369;500,000; gross business receipts &#8369;1,200,000 (8% elected).<br><b>Solution:</b> Compensation tax = 22,500 + 20% &times; (500,000 &minus; 400,000) = 42,500. Business tax = 8% &times; 1,200,000 (no &#8369;250,000 deduction) = 96,000. Total = <b>&#8369;138,500</b>.</p>
<p><b>Problem 6.6.</b> Who must file: (a) NRC with foreign income only; (b) employee with two employers; (c) minimum wage earner; (d) income wholly under final tax.<br><b>Solution:</b> Only <b>(b)</b> must file. (a) foreign income is outside the tax; (c) exempt; (d) final tax already paid.</p>` },
      { title: "7. Corporations", content: `<h3>7. Taxation of Corporations</h3>
<h4>7.1 What Is a Corporation for Tax Purposes</h4>
<p>Includes joint-stock companies, partnerships (except <b>general professional partnerships</b>), joint accounts, associations, and insurance companies. A <b>joint venture or co-ownership</b> formed to undertake construction projects or to engage in petroleum or other energy operations under a consortium agreement with the government is not taxable as a corporation. A <b>co-ownership</b> merely to preserve and divide property is not a corporation; if it operates a business it is taxed as a partnership.</p>
<h4>7.2 Rates on Domestic and Resident Foreign Corporations</h4>
<table>
<tr><th>Corporation</th><th>Base</th><th>Rate</th></tr>
<tr><td>Domestic corporation (general)</td><td>Net taxable income (worldwide)</td><td><b>25%</b> NCIT, or MCIT if higher</td></tr>
<tr><td>Small domestic corporation (net taxable income up to &#8369;5M <u>and</u> total assets up to &#8369;100M, excluding land)</td><td>Net taxable income</td><td><b>20%</b></td></tr>
<tr><td>Proprietary educational institution; non-profit hospital</td><td>Net taxable income</td><td>10% (1% from July 2020 to June 2023); if unrelated income exceeds 50% of total gross income, regular 25% on <u>all</u> taxable income</td></tr>
<tr><td>GOCCs, agencies, instrumentalities (incl. PCSO)</td><td>Net taxable income</td><td>25%</td></tr>
<tr><td>Resident foreign corporation (RFC)</td><td>Net PH-source income</td><td>25%</td></tr>
<tr><td>International carrier (resident foreign)</td><td>Gross Philippine Billings</td><td>2.5%</td></tr>
<tr><td>Branch profit remittance (to head office)</td><td>Total profits applied or earmarked for remittance</td><td>15% (PEZA branches exempt)</td></tr>
<tr><td>Domestic depositary banks (FCDU)</td><td>Interest income</td><td>10% final</td></tr>
</table>
<p><b>CREATE Act (R.A. 11534)</b> cut the regular rate from 30% to 25% (20% for small corporations) effective July 1, 2020, and repealed the 15% optional gross income tax and the 10% improperly accumulated earnings tax.</p>
<h4>7.3 Non-Resident Foreign Corporations</h4>
<table>
<tr><th>Income</th><th>Rate (final, on gross PH-source)</th></tr>
<tr><td>General PH-source income</td><td>25%</td></tr>
<tr><td>Dividends from a domestic corporation</td><td>25%, or 15% under the tax sparing rule</td></tr>
<tr><td>Non-resident cinematographic film owner, lessor or distributor</td><td>25%</td></tr>
<tr><td>Lessor of machinery and equipment</td><td>7.5% of gross rentals or fees</td></tr>
<tr><td>Lessor of vessels (charter)</td><td>4.5% of gross rentals, lease or charter fees</td></tr>
</table>
<h4>7.4 The Normal Corporate Income Tax (NCIT) Computation</h4>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0">Gross income = Net sales (or gross receipts) &minus; cost of sales / direct costs<br>Taxable income = Gross income &minus; allowable deductions (itemized or 40% OSD of gross income) &minus; NOLCO<br>NCIT = 25% (or 20%) &times; taxable income</p>
<h4>7.5 Minimum Corporate Income Tax (MCIT)</h4>
<table>
<tr><th>Point</th><th>Rule</th></tr>
<tr><td>Rate and base</td><td><b>2% of gross income</b> (1% from July 2020 to June 2023)</td></tr>
<tr><td>When it starts</td><td>Beginning the <b>4th taxable year</b> after the year of commencement of business</td></tr>
<tr><td>Which is paid</td><td>The <b>higher</b> of NCIT and MCIT (when NCIT is lower, or there is a loss)</td></tr>
<tr><td>Excess MCIT</td><td>Excess of MCIT over NCIT is credited against NCIT for the <b>3 immediately succeeding years</b></td></tr>
<tr><td>Who is exempt</td><td>Non-profit and special corporations (education, hospitals, GOCCs), RFCs on certain bases, those under special laws</td></tr>
<tr><td>Suspension</td><td>Prolonged labor dispute, force majeure, legitimate business reverses (with the Secretary of Finance's approval)</td></tr>
</table>
<p style="background:var(--side);border-left:4px solid var(--gold);padding:8px 12px;margin:12px 0"><b>Rule:</b> Tax due = higher of (25% &times; net taxable income) and (2% &times; gross income). Excess MCIT = MCIT &minus; NCIT, carried 3 years.</p>
<h4>7.6 General Professional Partnerships and Co-ownerships</h4>
<ul>
<li>A <b>GPP</b> (partners exercising a common profession, income from the practice only) is <b>not</b> taxed; each partner is taxed on his distributive share, <u>whether or not distributed</u>, and may use itemized deductions or OSD on that share.</li>
<li>A business <b>general partnership</b> is taxed as a corporation. Wrong vehicle = corporate tax plus a second tax on distributions.</li>
</ul>
<h4>Solved Problems</h4>
<p><b>Problem 7.1 (NCIT vs. MCIT, 5th year).</b> DC (not small): gross income &#8369;10,000,000; net taxable income &#8369;600,000.<br><b>Solution:</b> NCIT = 25% &times; 600,000 = 150,000. MCIT = 2% &times; 10,000,000 = 200,000. Pay the higher: <b>&#8369;200,000</b>. Excess = 50,000, carried 3 years.</p>
<p><b>Problem 7.2 (6th year).</b> Gross income &#8369;20,000,000; net taxable income &#8369;1,000,000.<br><b>Solution:</b> NCIT = 250,000; MCIT = 400,000. Tax due = <b>&#8369;400,000</b>; excess MCIT = <b>&#8369;150,000</b>, creditable against NCIT for 3 years.</p>
<p><b>Problem 7.3 (unsupported expense).</b> XYZ Corp. (7th year): gross income &#8369;30,000,000; net taxable income &#8369;1,500,000, including &#8369;200,000 unsupported representation expense.<br><b>Solution:</b> Corrected taxable income = 1,500,000 + 200,000 = 1,700,000. NCIT = 425,000. MCIT = 2% &times; 30,000,000 = 600,000. Tax due = <b>&#8369;600,000</b>; excess MCIT = 175,000.</p>
<p><b>Problem 7.4 (second year, NCIT).</b> DC (assets &#8369;150M): sales &#8369;12,000,000; COGS &#8369;7,000,000; operating expenses &#8369;3,000,000; bank interest &#8369;100,000 (20% FWT withheld).<br><b>Solution:</b> Gross income = 5,000,000. Taxable income = 5,000,000 &minus; 3,000,000 = 2,000,000. NCIT = 25% &times; 2,000,000 = <b>&#8369;500,000</b>. The interest is under final tax (&#8369;20,000) and excluded. MCIT does not yet apply (not yet the 4th year).</p>
<p><b>Problem 7.5 (branch profit remittance).</b> A branch earned &#8369;20,000,000, paid regular tax, and earmarked &#8369;6,000,000 for remittance (not PEZA).<br><b>Solution:</b> 15% &times; 6,000,000 = <b>&#8369;900,000</b>.</p>
<p><b>Problem 7.6 (predominance test).</b> A proprietary school has total gross income &#8369;10,000,000, of which &#8369;2,700,000 is from unrelated activity.<br><b>Solution:</b> 27% is not over 50%, so it keeps the <b>10%</b> rate. If unrelated income were &#8369;5,300,000 (53%), the whole taxable income would be taxed at 25%.</p>` },
      { title: "8. Withholding & Filing", content: `<h3>8. Withholding Taxes and Filing</h3>
<table>
<tr><th>Type</th><th>Effect</th><th>Return needed?</th></tr>
<tr><td><b>Creditable withholding tax (CWT / expanded)</b></td><td>Withheld and credited against the payee's annual income tax; it is a prepayment</td><td>Yes. The payee still files and reports the income.</td></tr>
<tr><td><b>Final withholding tax (FWT)</b></td><td>Full and final payment of the tax on that income</td><td>No. The income is outside the graduated computation.</td></tr>
<tr><td><b>Withholding on compensation</b></td><td>Tax withheld each pay period by the employer at graduated rates</td><td>Not if substituted filing applies</td></tr>
</table>
<h4>Common Final Taxes (Resident Citizen / Resident Alien unless stated)</h4>
<table>
<tr><th>Income</th><th>Rate</th></tr>
<tr><td>Interest on bank deposits and deposit substitutes</td><td>20%</td></tr>
<tr><td>Dividends from a domestic corporation</td><td>10%</td></tr>
<tr><td>Royalties (books, literary, musical) / other royalties</td><td>10% / 20%</td></tr>
<tr><td>Prizes over &#8369;10,000</td><td>20%</td></tr>
<tr><td>Capital gains: unlisted shares / real property</td><td>15% / 6%</td></tr>
<tr><td>Listed shares (stock transaction tax)</td><td>0.1% of gross selling price</td></tr>
<tr><td>NRA-NETB (most PH-source income)</td><td>25%</td></tr>
<tr><td>NRFC</td><td>25%</td></tr>
</table>
<h4>The Withholding Agent</h4>
<ul>
<li>The agent withholds, remits, and files returns; it is personally liable for tax not withheld and remitted, plus penalties.</li>
<li>If the agent fails to withhold, the payee is <u>not</u> absolved: the Bureau may collect from either, but a payment by one discharges the other (<i>RCBC v. CIR</i>). A payee who notices he was not withheld upon should raise it.</li>
<li>Since 2024, failure to withhold no longer by itself disallows the deduction (R.A. 11976, repealing Sec. 34(K)). Penalties on the agent still apply.</li>
</ul>
<h4>Solved Problem</h4>
<p><b>Problem 8.1.</b> Mr. Reyes (resident citizen), 2026: salary &#8369;1,200,000 (one employer, correctly withheld); bank interest &#8369;50,000; sale of a residential lot (capital asset) at &#8369;5,000,000 (zonal value &#8369;5,200,000); cash dividends &#8369;80,000 from a domestic corporation. Treat each item; must he file?<br><b>Solution:</b> (i) Salary: tax = 102,500 + 25% &times; (1,200,000 &minus; 800,000) = <b>&#8369;202,500</b>, withheld. (ii) Interest: 20% FWT = <b>&#8369;10,000</b>. (iii) Lot: 6% &times; 5,200,000 (higher of the two) = <b>&#8369;312,000</b> CGT. (iv) Dividends: 10% final = <b>&#8369;8,000</b>. Everything is either withheld at the right amount (single employer) or under final tax, so he is <b>not required to file</b> an annual return.</p>` },
      { title: "9. Formula Sheet", content: `<h3>9. Formula and Rate Cheat Sheet</h3>
<h4>Quick Formulas</h4>
<table>
<tr><th>Topic</th><th>Formula</th></tr>
<tr><td>Net sales</td><td>Gross sales &minus; returns &minus; discounts &minus; allowances</td></tr>
<tr><td>Gross income (trade)</td><td>Net sales &minus; COGS</td></tr>
<tr><td>Taxable income (itemized)</td><td>Gross income &minus; itemized deductions &minus; NOLCO</td></tr>
<tr><td>Taxable income (OSD)</td><td>Gross sales/receipts (or gross income, for corporations) &times; 60%</td></tr>
<tr><td>Grossed-up monetary value</td><td>Monetary value &divide; 65% (or 75% for NRA-NETB)</td></tr>
<tr><td>Fringe benefit tax</td><td>GMV &times; 35% (or 25% for NRA-NETB)</td></tr>
<tr><td>CGT on real property</td><td>6% &times; higher of selling price, zonal value, FMV</td></tr>
<tr><td>CGT on unlisted shares</td><td>15% &times; net capital gain</td></tr>
<tr><td>Stock transaction tax</td><td>0.1% &times; gross selling price</td></tr>
<tr><td>8% option (purely self-employed)</td><td>8% &times; (gross receipts &minus; &#8369;250,000)</td></tr>
<tr><td>8% option (mixed income)</td><td>8% &times; gross business receipts</td></tr>
<tr><td>Percentage tax (if not 8%)</td><td>3% &times; gross sales/receipts</td></tr>
<tr><td>NCIT</td><td>25% (20% if small) &times; taxable income</td></tr>
<tr><td>MCIT</td><td>2% &times; gross income (4th year onward)</td></tr>
<tr><td>Excess MCIT</td><td>MCIT &minus; NCIT; credit for 3 years</td></tr>
<tr><td>Branch profit remittance tax</td><td>15% &times; profits applied or earmarked for remittance</td></tr>
<tr><td>Straight-line depreciation</td><td>(Cost &minus; salvage) &divide; useful life</td></tr>
<tr><td>Depletion</td><td>(Cost &divide; recoverable units) &times; units extracted</td></tr>
<tr><td>Interest deduction</td><td>Interest expense &minus; 20% &times; interest income under final tax</td></tr>
<tr><td>EAR ceiling</td><td>0.5% of net sales (goods); 1% of net revenues (services)</td></tr>
<tr><td>Charitable ceiling</td><td>5% (individual) / 10% (corporation) of income before the contribution</td></tr>
</table>
<h4>Threshold Numbers</h4>
<table>
<tr><th>Number</th><th>Meaning</th></tr>
<tr><td>&#8369;250,000</td><td>Zero-rate bracket; 8% option deduction (purely self-employed)</td></tr>
<tr><td>&#8369;3,000,000</td><td>VAT threshold; ceiling for the 8% option</td></tr>
<tr><td>&#8369;90,000</td><td>13th month and other benefits exclusion</td></tr>
<tr><td>&#8369;10,000</td><td>Prize threshold (over: 20% final)</td></tr>
<tr><td>180 days</td><td>NRA-ETB / NRA-NETB line</td></tr>
<tr><td>12 months</td><td>Holding period (50% rule, individuals; not real property or shares)</td></tr>
<tr><td>&#8369;5M / &#8369;100M</td><td>Small corporation: net taxable income / total assets (excluding land)</td></tr>
<tr><td>3 years</td><td>NOLCO; excess MCIT carry-over</td></tr>
<tr><td>4th year</td><td>MCIT begins</td></tr>
<tr><td>50%</td><td>Predominance test for schools and non-profit hospitals</td></tr>
</table>
<h4>Mnemonics</h4>
<table>
<tr><th>Mnemonic</th><th>Stands for</th></tr>
<tr><td>S-P-I-N-E</td><td>Inherent limitations: Situs, Public purpose, International comity, Non-delegability, Exemption of government</td></tr>
<tr><td>U-J-I-P</td><td>Valid tax: Uniform, Jurisdiction, Inherent/constitutional limits not violated, Public purpose</td></tr>
<tr><td>S-O-U-R</td><td>Ordinary assets: Stock-in-trade, Ordinary course, Used in business, Real property used in business</td></tr>
<tr><td>C-R-E-D3-I-T-L-P</td><td>Itemized deductions: Charitable, Research, Expenses, Depreciation, Depletion, Debts, Interest, Taxes, Losses, Pension trust</td></tr>
<tr><td>P-C-S-W-N</td><td>Deductibility: Paid/incurred, Connected to business, Substantiated, Withholding tax paid (no longer required from 2024), Not against law</td></tr>
<tr><td>H-E-V-H-I-M-H-E E-L</td><td>Fringe benefits: Housing, Expense account, Vehicle, Household personnel, Interest on loans, Membership fees, Holiday/vacation, Education, foreign travel Expenses, Life/health insurance excess</td></tr>
</table>
<h4>Solving Any Income Tax Problem (5 Steps)</h4>
<ol>
<li><b>Classify</b> the taxpayer (RC, NRC, RA, NRA-ETB, NRA-NETB, DC, RFC, NRFC).</li>
<li><b>Source</b> the income (situs) and drop what is outside the taxpayer's reach.</li>
<li><b>Separate</b> exclusions and final-tax items from regular income.</li>
<li><b>Deduct</b> (itemized, OSD, or 8% for eligible individuals) and apply NOLCO.</li>
<li><b>Apply the rate</b>, compare NCIT vs. MCIT or graduated vs. 8%, then credit withholding.</li>
</ol>` },
      { title: "10. Cases Digest Index", content: `<h3>10. Index of Cases</h3>
<table>
<tr><th>Case</th><th>Doctrine</th></tr>
<tr><td>Caltex v. COA; Lutz v. Araneta</td><td>Taxation may serve a regulatory purpose; implement of police power</td></tr>
<tr><td>Manila Memorial Park v. DSWD</td><td>Senior citizen discount is police power, not eminent domain</td></tr>
<tr><td>Deutsche Bank v. CIR</td><td>Tax treaty relief prevails over a BIR administrative issuance</td></tr>
<tr><td>Ormoc Sugar v. Treasurer of Ormoc</td><td>Equal protection; reasonable classification must cover future members</td></tr>
<tr><td>CIR v. Algue</td><td>Lifeblood doctrine; substantiated expenses are deductible</td></tr>
<tr><td>Nursery Care v. Acevedo; City of Manila v. Coca-Cola</td><td>Six-element test for direct double taxation</td></tr>
<tr><td>CIR v. Estate of Toda</td><td>Elements of tax evasion; sham two-step sale</td></tr>
<tr><td>Air Canada v. CIR</td><td>Offline carrier selling through a local agent is an RFC</td></tr>
<tr><td>Madrigal v. Rafferty</td><td>Income vs. capital; realization</td></tr>
<tr><td>CIR v. Filinvest</td><td>Mere appreciation is not realized gain</td></tr>
<tr><td>BIR v. First E-Bank Tower</td><td>Condominium dues are not income</td></tr>
<tr><td>Fisher v. Trinidad</td><td>Stock dividends are not income</td></tr>
<tr><td>CIR v. General Foods</td><td>Brand-building advertising is a capital expenditure</td></tr>
<tr><td>3M Philippines v. CIR</td><td>Illegal or against-public-policy payments are not deductible</td></tr>
<tr><td>Pascual v. Sec. of Public Works</td><td>Public purpose must exist; appropriating funds primarily for private benefit is void</td></tr><tr><td>American Bible Society v. City of Manila</td><td>No license tax on dissemination of religious materials</td></tr><tr><td>Tolentino v. Sec. of Finance</td><td>General non-discriminatory taxes may apply to the press; non-impairment protects only exemptions given for consideration</td></tr><tr><td>Compania General de Tabacos v. City of Manila</td><td>A license fee (police power) and a tax may both be imposed on the same business; not double taxation</td></tr><tr><td>CIR v. Transfield Philippines; CS Garment v. CIR</td><td>BIR circulars cannot add disqualifications to a tax amnesty law</td></tr><tr><td>CIR v. BOAC</td><td>Source of income is the activity that produces it; ticket sales in the PH are PH-source</td></tr><tr><td>El Oriente Fabrica de Tabacos v. Posadas</td><td>Life insurance proceeds on death are excluded from the beneficiary's gross income</td></tr><tr><td>CIR v. Isabela Cultural Corp.</td><td>Accrual method: all-events test (liability fixed; amount reasonably determinable)</td></tr><tr><td>Collector v. Goodrich International Rubber</td><td>Bad debt needs proof of actual worthlessness; a mere provision for doubtful accounts is not enough</td></tr><tr><td>CIR v. Smart Communications</td><td>PH payor must withhold the final tax on NRFC income; failure makes the withholding agent liable</td></tr><tr><td>RCBC v. CIR</td><td>Withholding agent and payee liability; payment by one discharges the other</td></tr>
</table>` },
      { title: "11. Problem Set & Review", content: `<h3>11. Problem Set and Review Exam</h3>
<p><i>From the BSLM 3B Student Module. The module prints only the solutions, so each problem below is restated from the facts used in its solution.</i></p>
<h4>Unit 3 Problems</h4>
<p><b>3-A (classification).</b> Treat each item: salary; a VP's fringe benefit; free quarters required by the job; bonus to a rank-and-file employee; employer-paid group life insurance; life insurance proceeds on death; a rice subsidy of &#8369;12,000/month.<br><b>Solution:</b> (1) Compensation, graduated rates. (2) FBT paid by the employer; not compensation of the VP. (3) Excluded (employer's convenience). (4) Compensation. (5) Excluded and exempt from FBT. (6) Excluded. (7) The de minimis ceiling is &#8369;3,000/month (&#8369;36,000/year); the <u>excess</u> is compensation at graduated rates.</p>
<p><b>3-B (CGT).</b> Mr. Santos sells a capital-asset lot: selling price &#8369;3,500,000; zonal value &#8369;4,100,000; assessor's FMV &#8369;3,200,000 (actual gain &#8369;700,000).<br><b>Solution:</b> 6% final CGT on the highest value: 4,100,000 &times; 6% = <b>&#8369;246,000</b>. The actual gain is irrelevant (presumed gain).</p>
<p><b>3-C (leasehold, spread-out).</b> Ms. Lim: 8-year lease; cash rent &#8369;800,000/yr; lessee's improvement cost &#8369;6,400,000, useful life 32 years.<br><b>Solution:</b> Depreciation = 6,400,000 &divide; 32 = 200,000/yr; &times; 8 = 1,600,000; book value = 4,800,000; annual income = 4,800,000 &divide; 8 = 600,000; total = 800,000 + 600,000 = <b>&#8369;1,400,000 per year</b>.</p>
<h4>Unit 4 Problems</h4>
<p><b>4-A (arbitrage).</b> Interest expense &#8369;1,200,000; interest income under final tax &#8369;400,000.<br><b>Solution:</b> Reduction = 20% &times; 400,000 = 80,000. Deductible = 1,200,000 &minus; 80,000 = <b>&#8369;1,120,000</b>. The reduction is permanent.</p>
<p><b>4-B (charitable).</b> Taxable income before contribution &#8369;6,000,000 (corporation). Donations: &#8369;400,000 to a fully deductible NGO; &#8369;300,000 to a church (limited).<br><b>Solution:</b> NGO: 100% = 400,000. Church: ceiling 10% &times; 6,000,000 = 600,000; 300,000 is within it. Total = <b>&#8369;700,000</b>.</p>
<p><b>4-C (bad debt, tax benefit rule).</b> &#8369;200,000 was written off in Year 1 (tax benefit &#8369;50,000); &#8369;150,000 is recovered in Year 3.<br><b>Solution:</b> (a) The deduction reduced tax, so the recovery of 150,000 is <b>taxable</b>. (b) If Year 1 produced a net operating loss and the deduction gave no tax benefit, the recovery is <b>not taxable</b>. A recovery is taxable only to the extent the prior deduction reduced actual tax.</p>
<h4>Unit 5 Problems</h4>
<p><b>5-A.</b> Resident citizen: compensation &#8369;1,800,000; bank interest &#8369;40,000; cash dividend &#8369;80,000; rent &#8369;360,000 with &#8369;60,000 expenses.<br><b>Solution:</b> Interest (20% FWT) and dividend (10% FWT) are final and left out. Taxable income = 1,800,000 + (360,000 &minus; 60,000) = 2,100,000. Tax = 402,500 + 30% &times; 100,000 = <b>&#8369;432,500</b>, less any CWT on the rent.</p>
<p><b>5-B (8% vs. graduated).</b> Ms. Flores: gross receipts &#8369;1,500,000; itemized expenses &#8369;480,000.<br><b>Solution:</b> Graduated: taxable income 1,020,000; tax = 102,500 + 25% &times; 220,000 = 157,500. 8%: 8% &times; (1,500,000 &minus; 250,000) = 100,000. The 8% option also avoids the 3% percentage tax (3% &times; 1,500,000 = 45,000). Total saving = 57,500 + 45,000 = <b>&#8369;102,500</b>. Elect 8%.</p>
<p><b>5-C (NCIT vs. MCIT over three years).</b></p>
<table>
<tr><th>Year</th><th>Net taxable income</th><th>Gross income</th><th>NCIT 25%</th><th>MCIT 2%</th><th>Result</th></tr>
<tr><td>1</td><td>2,500,000</td><td>15,000,000</td><td>625,000</td><td>300,000</td><td>Pay NCIT 625,000</td></tr>
<tr><td>2</td><td>600,000</td><td>18,000,000</td><td>150,000</td><td>360,000</td><td>Pay MCIT 360,000; excess MCIT 210,000</td></tr>
<tr><td>3</td><td>3,000,000</td><td>20,000,000</td><td>750,000</td><td>400,000</td><td>Pay NCIT 750,000 &minus; 210,000 credit = <b>540,000</b></td></tr>
</table>
<p><b>5-D (GPP).</b> A GPP of two equal partners earns &#8369;4,200,000. Mr. B also has &#8369;800,000 sole-proprietorship income.<br><b>Solution:</b> The GPP is not taxed. Each share = 2,100,000. Mr. A: 402,500 + 30% &times; 100,000 = <b>&#8369;432,500</b>. Mr. B: taxable income 2,900,000; 402,500 + 30% &times; 900,000 = <b>&#8369;672,500</b>.</p>
<p><b>Worked example (GPP, three equal partners).</b> Net income &#8369;8,000,000 (fees 12,000,000 less deductions 4,000,000). Share = 8,000,000 &divide; 3 = 2,666,667. Tax per partner = 402,500 + 30% &times; 666,667 = <b>&#8369;602,500</b>. Partners cannot claim extra deductions on the share if the GPP already claimed them.</p>
<h4>Review Exam: Multiple Choice</h4>
<table>
<tr><th>#</th><th>Question</th><th>Answer and reason</th></tr>
<tr><td>1</td><td>Resident citizen sells a condo (capital asset) for &#8369;8,000,000; zonal value &#8369;7,500,000; FMV &#8369;6,800,000. CGT?</td><td><b>&#8369;480,000.</b> 6% &times; highest (8,000,000).</td></tr>
<tr><td>2</td><td>Dividends received by an RFC from a domestic corporation are:</td><td><b>Exempt</b> (inter-corporate dividend).</td></tr>
<tr><td>3</td><td>The holding period rule applies to:</td><td><b>Individuals only</b>; not corporations, real property or shares.</td></tr>
<tr><td>4</td><td>Who may elect the 8%: employee earning &#8369;2.5M; VAT-registered writer with &#8369;2M; non-VAT consultant with &#8369;2.5M; corporation with &#8369;5M?</td><td><b>The non-VAT consultant.</b> Others fail by category or VAT registration.</td></tr>
<tr><td>5</td><td>Stock dividends are generally:</td><td><b>Not income</b> (<i>Fisher v. Trinidad</i>), unless redeemed in a way equivalent to a taxable dividend.</td></tr>
</table>
<h4>Review Exam: Essays</h4>
<p><b>Essay 1.</b> Distinguish avoidance and evasion.<br><b>Answer:</b> The dividing line is <b>legality</b>. Avoidance uses lawful means in good faith (e.g., donating half of income property to a tax-exempt school, 2000 Bar). Evasion needs (1) underpayment of tax known to be due, (2) bad faith, (3) an unlawful course of action (e.g., the sham two-step sale in <i>Toda</i>).</p>
<p><b>Essay 2.</b> Mr. Santos stayed more than 180 days; income: consultancy fees &#8369;500,000, bank interest &#8369;200,000, cash dividends &#8369;200,000.<br><b>Answer:</b> He is an NRA-ETB (graduated rates on net PH-source income). The fees are PH-source (services performed here) and go in his return. The interest bears 20% FWT (&#8369;40,000) and the dividends 20% FWT, both final and left out. Only the &#8369;500,000 enters the return.</p>
<h4>Review Exam: Comprehensive Problem</h4>
<p>ABC Corp.: sales &#8369;50,000,000; COGS &#8369;28,000,000; operating expenses &#8369;14,000,000; interest expense &#8369;2,000,000; &#8369;500,000 interest on long-term deposits; &#8369;800,000 donation to the Red Cross; total assets &#8369;180,000,000 including &#8369;50,000,000 of land; prior-year MCIT credit &#8369;150,000. Compute the tax payable.</p>
<ol>
<li><b>Gross income</b> = 50,000,000 &minus; 28,000,000 = 22,000,000.</li>
<li><b>Interest:</b> the module treats the long-term deposit interest as exempt, so no arbitrage reduction: full 2,000,000 deductible. (Under CMEPA that interest is no longer exempt; the 20% arbitrage reduction would then apply. Follow your professor's version.)</li>
<li><b>Donation:</b> income before contribution = 22,000,000 &minus; 14,000,000 &minus; 2,000,000 = 6,000,000; ceiling 10% = 600,000; allowed <b>600,000</b> (200,000 disallowed).</li>
<li><b>Net taxable income</b> = 6,000,000 &minus; 600,000 = <b>5,400,000</b>.</li>
<li><b>Rate:</b> assets less land = 130,000,000, above the 100M cap, so not a small corporation: 25%. NCIT = <b>1,350,000</b>.</li>
<li><b>MCIT</b> = 2% &times; 22,000,000 = 440,000. NCIT is higher, so pay NCIT.</li>
<li><b>Credit</b> prior MCIT 150,000: tax payable = <b>&#8369;1,200,000</b>.</li>
</ol>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Income Taxation.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra1997/ra_8424_1997.html" target="_blank" rel="noopener">National Internal Revenue Code (R.A. 8424)</a></td><td>Secs. 22-34, 24-28, 32, 39-42, 51, 57-58</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2017/ra_10963_2017.html" target="_blank" rel="noopener">TRAIN Law (R.A. 10963)</a></td><td>Individual rates, 8% option</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2021/ra_11534_2021.html" target="_blank" rel="noopener">CREATE Act (R.A. 11534)</a></td><td>Corporate rates, MCIT, dividends</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2024/ra_11976_2024.html" target="_blank" rel="noopener">Ease of Paying Taxes Act (R.A. 11976)</a></td><td>Repeal of Sec. 34(K) and other changes</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2025/ra_12214_2025.html" target="_blank" rel="noopener">CMEPA (R.A. 12214)</a></td><td>Stock transaction tax, interest income tax</td></tr><tr><td><a href="https://www.bir.gov.ph/" target="_blank" rel="noopener">Bureau of Internal Revenue</a></td><td>Revenue regulations, forms, issuances</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Law on Business Protection",
    sub: "Intellectual Property",
    lessons: [
      { title: "Copyright Basics", content: `<h3>I. Copyright: Your Creation, Your Right</h3>
<p><b>Copyright</b> is the law's way of saying, "If you made it, it's yours." It protects things people create with their imagination, like stories, songs, drawings, and videos (Sec. 172, <a href="https://lawphil.net/statutes/repacts/ra1997/pdf/ra_8293_1997.pdf" target="_blank" rel="noopener">R.A. 8293, the IP Code</a>).</p>
<blockquote><b>The big idea:</b> The moment you finish drawing a picture, you already own the copyright. No form, no fee, no stamp. <b>Registration is not required.</b></blockquote>
<table>
<tr><th>Word</th><th>What it means</th></tr>
<tr><td>Author</td><td>The real person who made the work (Sec. 171.1)</td></tr>
<tr><td>Reproduction</td><td>Making copies of a work (Sec. 171.9)</td></tr>
<tr><td>Communication to the public</td><td>Putting a work where people can watch or read it when they choose, like online (Sec. 171.3)</td></tr>
</table>
<h4>Quick Facts</h4>
<ul>
<li><b>It is automatic.</b> Creating the work is enough (Sec. 172.2).</li>
<li><b>It protects the way you show an idea, not the idea itself.</b> Many kids can write a story about dragons, but each one owns only their own words (Sec. 175).</li>
<li><b>It lasts a long time:</b> for the author's whole life plus 50 years (Sec. 213).</li>
</ul>
<h4>Three Different Kinds of Protection</h4>
<p>Think of three locks for three treasures: <b>copyright</b> for creative works, <b>trademark</b> for names and logos that identify a brand, and <b>patent</b> for new inventions. One lock cannot open the other boxes.</p>
<p><b><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/50585" target="_blank" rel="noopener">Kho v. Court of Appeals</a></b> (G.R. No. 115758, 2002)</p>
<ul>
<li><b>The story:</b> Elidad Kho sold face cream called "Chin Chun Su." She had a patent and a copyright, and she said no one else could use the name or the oval container. Another company used similar containers.</li>
<li><b>The question:</b> Do a copyright and a patent give her the right to the name and container?</li>
<li><b>The answer: No.</b> A name and a container are about <b>trademark</b>, and she had not proved one.</li>
<li><b>Lesson:</b> Copyright, trademark, and patent are separate. Having one does not give you the others.</li>
</ul>
<h4>References</h4>
<ul>
<li><a href="https://lawphil.net/statutes/repacts/ra1997/pdf/ra_8293_1997.pdf" target="_blank" rel="noopener">R.A. 8293, Intellectual Property Code (full text)</a>: Secs. 171-172, 175, 213</li>
<li><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/50585" target="_blank" rel="noopener">Kho v. Court of Appeals, G.R. No. 115758 (Mar. 19, 2002)</a></li>
</ul>` },
      { title: "Protected Works", content: `<h3>II. What Copyright Protects</h3>
<h4>Original Works (Sec. 172.1)</h4>
<p>A work is <b>original</b> when you made it yourself from your own ideas. Examples:</p>
<ul>
<li><b>Words:</b> books, articles, newspapers, speeches, letters</li>
<li><b>Music and performance:</b> songs, plays, dances</li>
<li><b>Art:</b> drawings, paintings, sculptures, buildings, designs</li>
<li><b>Pictures and maps:</b> photographs, maps, charts, sketches</li>
<li><b>Screens:</b> movies, videos, ads, and <b>computer programs</b></li>
</ul>
<h4>Derivative Works (Sec. 173)</h4>
<p>A <b>derivative work</b> is built from someone else's work, like a translation, a movie based on a book, or a collection of stories. It gets its own protection, but only for the <b>new things you added</b>.</p>
<blockquote><b>Remember:</b> Making a movie from a book does not make you the owner of the book. The book's owner keeps their rights. Example: Harry Potter novels and films.</blockquote>
<table>
<tr><th>Original work</th><th>Derivative work</th></tr>
<tr><td>Made from scratch by the author</td><td>Made from a work that already exists</td></tr>
<tr><td>Fully protected</td><td>Protected only for what is new</td></tr>
<tr><td>Author keeps all rights</td><td>Owner of the first work keeps their rights</td></tr>
</table>
<h4>Publisher's Right (Sec. 174)</h4>
<p>A publisher owns the right to copy the <b>layout</b> of a book: how the pages look and are arranged. This is separate from the author's copyright in the words.</p>
<h4>Cases</h4>
<p><b><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/67242" target="_blank" rel="noopener">Republic (PNP) v. Tupaz</a></b> (G.R. No. 197335, 2020)</p>
<ul>
<li><b>The story:</b> The police wanted new badges. They shared their ideas, and an artist, Jose Tupaz IV, drew and made the designs. His company later registered the copyright and won the badge contract. The police said the designs belonged to the government.</li>
<li><b>The answer:</b> The Supreme Court sided with Tupaz.</li>
<li><b>Why:</b> The police only gave <b>ideas</b>. Tupaz used his skill to turn those ideas into real designs. The one who makes the idea real is the author.</li>
</ul>
<p><b><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/4/43469" target="_blank" rel="noopener">Ching v. Salinas</a></b> (G.R. No. 161295, 2005)</p>
<ul>
<li><b>The story:</b> Jessie Ching registered two machine parts (utility models) with the National Library and claimed copyright.</li>
<li><b>The answer: No.</b> Machine parts are not literary or artistic works. Registering something does not make it copyrightable.</li>
</ul>
<h4>References</h4>
<ul>
<li><a href="https://lawphil.net/statutes/repacts/ra1997/pdf/ra_8293_1997.pdf" target="_blank" rel="noopener">R.A. 8293, Intellectual Property Code (full text)</a>: Secs. 172-174</li>
<li><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/67242" target="_blank" rel="noopener">Republic v. Heirs of Tupaz IV, G.R. No. 197335 (Sept. 7, 2020)</a></li>
<li><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/4/43469" target="_blank" rel="noopener">Ching v. Salinas, G.R. No. 161295 (June 29, 2005)</a></li>
</ul>` },
      { title: "Unprotected Matter", content: `<h3>III. What Copyright Does Not Protect (Sec. 175)</h3>
<p>Some things belong to everyone. Copyright does <b>not</b> cover:</p>
<table>
<tr><th>Not protected</th><th>Kid-friendly example</th></tr>
<tr><td><b>Ideas, methods, and systems</b>, even when written in a book</td><td>The idea of a dating game show, or how to play a game</td></tr>
<tr><td><b>News and facts</b> (plain press information)</td><td>"A typhoon hit the city today" is a fact. Nobody owns facts.</td></tr>
<tr><td><b>Official texts</b> like laws and rules, and their official translations</td><td>The text of a law</td></tr>
</table>
<h4>Idea vs. Expression</h4>
<p>Think of a recipe idea: "make chocolate cake." Anyone can do it. But the exact cookbook page you wrote about it, in your own words, is yours. Copyright protects the <b>expression</b> (how you say it), never the <b>idea</b>. Facts are <i>found, not created</i>, so no one owns them.</p>
<h4>Cases</h4>
<p><b><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/4/29853" target="_blank" rel="noopener">Joaquin v. Drilon</a></b> (G.R. No. 108946, 1999)</p>
<ul>
<li>Someone said another TV show copied the idea of a dating game show. The Court said the <b>general idea or format</b> of a show is not protected. To prove copying, you must compare the actual shows.</li>
</ul>
<p><b><a href="https://nlpdl.nlp.gov.ph/SC01/2015mar/195956.pdf" target="_blank" rel="noopener">ABS-CBN v. Gozon</a></b> (G.R. No. 195956, 2015)</p>
<ul>
<li>A news event is a fact, so it is free for all. But a network's <b>video footage</b> of that event can be protected.</li>
<li>Even protected footage may sometimes be used without breaking the law if it is <b>fair use</b>. Being protected and being fair use are two different questions.</li>
</ul>
<blockquote>See also <i>Republic v. Tupaz</i> in <i>Protected Works</i>: giving only an idea does not make you an author.</blockquote>
<h4>References</h4>
<ul>
<li><a href="https://lawphil.net/statutes/repacts/ra1997/pdf/ra_8293_1997.pdf" target="_blank" rel="noopener">R.A. 8293, Intellectual Property Code (full text)</a>: Sec. 175</li>
<li><a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/4/29853" target="_blank" rel="noopener">Joaquin v. Drilon, G.R. No. 108946 (Jan. 28, 1999)</a></li>
<li><a href="https://nlpdl.nlp.gov.ph/SC01/2015mar/195956.pdf" target="_blank" rel="noopener">ABS-CBN v. Gozon, G.R. No. 195956 (Mar. 11, 2015)</a></li>
</ul>` },
      { title: "Gov't Works", content: `<h3>IV. Works of the Government</h3>
<p><b>Definition (Sec. 171.11):</b> a work created by an officer or employee of the Philippine Government (including subdivisions, instrumentalities, and GOCCs) <b>as part of their regularly prescribed official duties</b>.</p>
<blockquote>Government employee + work created as part of the job = <b>work of the Government</b>.</blockquote>
<p>Examples: an annual agency report, an official map, an infographic on a government program, an information booklet, official photographs for an agency publication.</p>
<h4>Sec. 176</h4>
<ul>
<li><b>176.1, general rule:</b> <b>No copyright subsists</b> in any work of the Government. <b>But</b> prior approval of the agency concerned is needed to <b>exploit the work for profit</b>, and the agency may impose conditions such as <b>royalties</b>.</li>
<li><b>Free-use exception (176.1):</b> no prior approval or conditions for use, <b>for any purpose</b>, of statutes, rules and regulations, and speeches, lectures, sermons, addresses, and dissertations pronounced, read, or rendered in courts, before administrative agencies, in deliberative assemblies, and in meetings of public character. (A student may cite a statute in a research paper without permission.)</li>
<li><b>176.2:</b> the author of such speeches, lectures, etc. keeps the <b>exclusive right to make a collection</b> of his works.</li>
<li><b>176.3:</b> the Government <b>may receive and hold copyright</b> transferred to it by assignment, bequest, or otherwise. Publishing or republishing a still-protected work in a public document does <b>not</b> abridge the copyright or authorize use without the owner's consent.</li>
</ul>
<p><i>Example:</i> a private company that wants to reproduce and sell products bearing a government infographic must first get the agency's approval.</p>
<h4>Domingo v. CSC and Manalo</h4>
<p>G.R. No. 236050, June 17, 2020</p>
<ul>
<li><b>Facts:</b> Estrella Domingo, Chief Archivist at the National Archives (NAP), attended, on leave, a Bacoor City records-management seminar as resource speaker without office approval. NAP handouts were distributed. NAP charged her with grave misconduct, serious dishonesty, and conduct prejudicial to the service; the NAP, CSC, and CA ruled against her.</li>
<li><b>Issue:</b> Did the unauthorized use and dissemination of the NAP handouts violate any rule of conduct?</li>
<li><b>Held:</b> <b>No.</b> (1) No evidence she personally disseminated the handouts, and no finding that she was the "operating and controlling mind." (2) Under Sec. 176.1 the Government holds no copyright in its materials, so the handouts were free to be given to Bacoor stakeholders. (3) Presenting them to a local government unit was not exploitation <b>for profit</b>, and there was no finding that she profited.</li>
<li><b>Doctrine:</b> no prior approval or conditions for use of the materials listed in Sec. 176.1; only <i>for-profit exploitation</i> of a government work needs agency approval.</li>
</ul>` },
      { title: "Ownership and Transfer", content: `<h3>V. Ownership of Copyright (Sec. 178)</h3>
<table>
<tr><th>Situation</th><th>Who owns</th></tr>
<tr><td>Sole authorship</td><td>The author (individual creator)</td></tr>
<tr><td>Joint authorship, inseparable contributions</td><td>The co-authors are <b>co-owners</b></td></tr>
<tr><td>Joint work with separable parts</td><td>Each creator owns the part he or she created</td></tr>
<tr><td>Employee's work</td><td>The <b>employer</b>, if the work results from the employee's <i>regularly assigned duties</i>, unless a written agreement says otherwise. The <b>employee</b> owns it if it falls <i>outside</i> regular duties, even if company time, facilities, or materials were used</td></tr>
<tr><td>Commissioned work</td><td>The person who commissioned it owns the <i>work</i>, but copyright <b>stays with the creator</b> unless stipulated</td></tr>
<tr><td>Audiovisual / cinematographic</td><td>Jointly: producer, scenario author, music composer, director, and author of the adapted work. Unless stipulated otherwise, the <b>producer</b> may exercise the copyright as needed for exhibition and commercial exploitation</td></tr>
<tr><td>Letters</td><td>The <b>writer</b> owns the copyright. The addressee owns the physical letter but cannot publish it without the writer's consent (except by court authority for public good or justice)</td></tr>
</table>
<p><b>Business best practices:</b> state regular duties in employment contracts; use a <b>copyright assignment clause</b> with freelancers; use written collaboration agreements for joint projects.</p>
<h3>VI. Transfer, Assignment, and Licensing</h3>
<ul>
<li><b>Transfer:</b> the broad concept of passing ownership or rights to another.</li>
<li><b>Assignment:</b> a <b>permanent transfer or sale</b> from assignor to assignee, who becomes the new owner. It may be <b>total</b> (all rights, whole territory, full term) or <b>partial</b> (e.g., film rights only, one territory). It must be <b>in writing, signed</b>, and supported by <b>consideration</b>; under Sec. 180, copyright is not deemed assigned <i>inter vivos</i> without a written indication of intent. An oral "assignment" is void or at most a non-exclusive license.</li>
<li><b>License:</b> contractual permission to do acts that would otherwise infringe, <b>without transferring ownership</b>.</li>
</ul>
<table>
<tr><th></th><th>Exclusive license</th><th>Non-exclusive license</th></tr>
<tr><td>Effect</td><td>Sole permission, to the exclusion of all others, <b>including the licensor</b></td><td>Licensor keeps the right to use and to license others</td></tr>
<tr><td>Treated as</td><td>A transfer of ownership for that scope and duration</td><td>No transfer</td></tr>
<tr><td>Form</td><td>Must be written and signed</td><td>Per the class report: may be oral or implied (e.g., a freelancer's logo used for its intended purpose)</td></tr>
</table>
<ul>
<li><b>Duration:</b> a license cannot be indefinite. If no expiry is stated, it is deemed <b>expired after 3 years</b>.</li>
<li><b>Filing:</b> deeds of assignment may be filed with the National Library. Filing there and non-publication in the IPO Gazette do <b>not</b> void the deeds or agreements (Sec. 182; <i>COSAC v. FILSCAP</i>).</li>
</ul>` },
      { title: "Author's Rights", content: `<h3>VII. Rights of the Author</h3>
<h4>Economic Rights (Sec. 177)</h4>
<p>The exclusive right to authorize or prevent:</p>
<ol>
<li>Reproduction of the work or a substantial portion</li>
<li>Dramatization, translation, adaptation, abridgment, arrangement, or other transformation</li>
<li>First public distribution of the original and each copy by sale or other transfer of ownership</li>
<li>Rental of certain copyrighted works</li>
<li>Public display of the original or a copy</li>
<li>Public performance</li>
<li>Other communication to the public</li>
</ol>
<h4>Moral Rights (Secs. 193-199)</h4>
<table>
<tr><th>Section</th><th>Rule</th></tr>
<tr><td>193</td><td>The author may (1) require <b>attribution</b>; (2) <b>alter</b> the work before publication or <b>withhold</b> it; (3) <b>object to distortion, mutilation, or modification</b> prejudicial to honor or reputation; (4) <b>restrain use of his name</b> on a work he did not create or on a distorted version</td></tr>
<tr><td>194, breach of contract</td><td>An author <b>cannot be compelled</b> to perform a contract to create a work or publish an existing one, but is <b>liable for damages</b> for breach</td></tr>
<tr><td>195, waiver</td><td>Only by <b>written instrument</b>, and <b>invalid</b> if it would allow (1) use of the author's name, title, or reputation on a version that, because of alterations, would substantially injure another author's reputation, or (2) use of the author's name on a work he did not create</td></tr>
<tr><td>196, collective work</td><td>The right of attribution is <b>deemed waived</b> unless expressly reserved</td></tr>
<tr><td>197, editing</td><td>Absent contrary stipulation, <b>necessary editing, arranging, or adaptation</b> per reasonable, customary standards of the medium is not a violation. <b>Complete destruction</b> of an unconditionally transferred work is not a violation either</td></tr>
<tr><td>198, term</td><td>Life of the author and <b>perpetuity</b> after death; <b>not assignable or licensable</b>. The author may designate in writing (filed with the National Library) who enforces them; otherwise the <b>heirs</b>, then the <b>Director of the National Library</b></td></tr>
<tr><td>199, remedies</td><td>Enforcers get the same remedies as a copyright owner, plus Civil Code damages. Damages recovered after the creator's death are held in trust for the heirs, or the government if none</td></tr>
</table>
<table>
<tr><th></th><th>Economic rights (Sec. 177)</th><th>Moral rights (Sec. 193)</th></tr>
<tr><td>Purpose</td><td>Profit from commercial exploitation</td><td>Protect personality, reputation, creative integrity</td></tr>
<tr><td>Transferable?</td><td>Yes</td><td>No</td></tr>
<tr><td>Waivable?</td><td>Yes</td><td>Generally no (only by writing, within Sec. 195 limits)</td></tr>
<tr><td>Term</td><td>Life + 50 years</td><td>Life + perpetuity</td></tr>
</table>
<h4>Resale Royalty (Secs. 200-201)</h4>
<ul>
<li><b>Sec. 200:</b> on every sale or lease of an <b>original painting, sculpture, or original manuscript</b> (writer or composer) <i>after the first disposition</i> by the author, the author or heirs have an <b>inalienable right to 5% of the gross proceeds</b>, for life + 50 years.</li>
<li><b>Sec. 201, not covered:</b> prints, etchings, engravings, applied art, and similar works where the author mainly earns from <b>reproductions</b>.</li>
<li><i>Example:</i> the painter sells for &#8369;100,000 (no royalty on the first sale). The collector resells for &#8369;500,000, so the painter gets 5% = <b>&#8369;25,000</b>.</li>
</ul>
<h4>First Sale Doctrine (Exhaustion Rule)</h4>
<p>Once the owner makes the <b>first sale</b> of a particular copy, the copyright owner's <b>distribution right over that copy ends</b>. The buyer may resell, rent, give away, or destroy it. It does <b>not</b> limit the <b>reproduction</b> right. <i>Rationale:</i> free alienability of goods.</p>` },
      { title: "Related Rights", content: `<h3>VIII. Related (Neighboring) Rights (Secs. 202-215)</h3>
<h4>Definitions (Sec. 202)</h4>
<ul>
<li><b>Performers:</b> actors, singers, musicians, dancers, and others who act, sing, declaim, play in, interpret, or perform literary and artistic works.</li>
<li><b>Producer of a sound recording:</b> the person or entity that takes the initiative and bears responsibility for the <b>first fixation</b> of sounds.</li>
<li><b>Broadcasting organization:</b> a person or juridical entity duly authorized to engage in broadcasting.</li>
<li><b>Fixation</b> (recording of sounds or performances); <b>sound recording</b>; <b>audiovisual work</b>; <b>broadcasting</b> (wireless transmission of sounds or images); <b>publication</b> of a fixed performance (copies made available with the owner's permission); <b>communication to the public</b> (making a performance or recording available for listening or access by any method).</li>
</ul>
<table>
<tr><th>Holder</th><th>Rights</th></tr>
<tr><td>Performer (Sec. 203)</td><td>Authorize broadcasting, communication to the public, and <b>fixation</b>; authorize direct or indirect <b>reproduction</b>, first public <b>distribution</b>, commercial <b>rental</b>, and making the performance <b>available to the public</b></td></tr>
<tr><td>Sound recording producer (Sec. 208)</td><td>Authorize reproduction, first public distribution, commercial rental, and making the recording available to the public</td></tr>
<tr><td>Broadcasting organization (Sec. 211)</td><td><b>Rebroadcasting</b>; <b>recording</b> of broadcasts for communication to the public of TV broadcasts; use of such records for fresh transmissions or fresh recordings</td></tr>
</table>
<ul>
<li><b>Performer's moral rights (Sec. 204):</b> right to <b>attribution</b> and right to <b>integrity</b> (object to prejudicial distortion or mutilation). Exercised after death for 50 years by heirs, then the government.</li>
<li><b>Additional remuneration (Sec. 206):</b> for each broadcast or communication <i>after the first</i>, the performer gets at least <b>5% of the original compensation</b>, unless the contract says otherwise.</li>
<li><b>Equitable remuneration (Sec. 209):</b> if a commercially published sound recording is used for broadcasting, public communication, or public performance <b>for profit</b>, the user pays a single equitable remuneration to the <b>performers and the producer</b>, who <b>share equally</b> absent agreement.</li>
<li><b>Contract terms (Sec. 207):</b> performers may bargain for terms <b>more favorable</b> than the statutory minimum.</li>
<li><b>Limitations:</b> <b>Sec. 205</b>, once the performer authorizes broadcasting or fixation, Sec. 203 no longer applies (subject to Sec. 206), and Secs. 184-185 apply <i>mutatis mutandis</i> ("with the necessary changes"). <b>Sec. 210</b>, Secs. 184-185 apply to producers. <b>Sec. 212</b>, the general limitations on copyright apply <i>mutatis mutandis</i> to all related rights (e.g., Sec. 187 private reproduction, Sec. 188 libraries and archives, Sec. 190 importation).</li>
</ul>` },
      { title: "Limitations and Fair Use", content: `<h3>IX. Limitations on Copyright and Fair Use</h3>
<h4>Limitations (Sec. 184.1)</h4>
<p>Specific acts that are <b>not infringement</b>, even without permission or royalties, balancing creator rights with public welfare.</p>
<table>
<tr><th></th><th>Allowed act</th><th>Example</th></tr>
<tr><td>(a)</td><td><b>Private or charitable/religious</b> recitation or performance of a lawfully accessible work, privately and free of charge, or for charitable or religious institutions</td><td>Singing "Happy Birthday"; worship songs</td></tr>
<tr><td>(b)</td><td><b>Quotations</b> from a published work, compatible with fair use and justified by the purpose, with <b>source and author</b> named</td><td>Quoting a Justice's opinion with citation</td></tr>
<tr><td>(c)</td><td><b>Mass-media reproduction</b> of articles on current political, social, economic, scientific, or religious topics delivered in public, if rights are not expressly reserved and the source is credited</td><td>Re-airing a mayor's public speech</td></tr>
<tr><td>(d)</td><td>Use in <b>reports of current events</b> by photography, cinematography, or broadcasting, to the extent necessary</td><td>Billboard caught in a live street interview</td></tr>
<tr><td>(e)</td><td><b>Teaching illustration</b>, compatible with fair use, with source and author named</td><td>Diagram in a classroom slide</td></tr>
<tr><td>(f)</td><td><b>Educational recording</b> of a broadcast for school use; deleted within a reasonable period; not from feature films (except brief excerpts)</td><td>University recording a documentary</td></tr>
<tr><td>(g)</td><td><b>Temporary recording</b> by a broadcaster using its own facilities for its own broadcast</td><td>DJ pre-records voice tracks</td></tr>
<tr><td>(h)</td><td>Use by or under the control of the <b>Government, National Library, or educational, scientific, or professional institutions</b>, in the public interest</td><td>Digitizing a rare book</td></tr>
<tr><td>(i)</td><td><b>Free charitable or educational performance</b> by a <b>non-profit club or school</b>, with <b>no admission fee</b></td><td>Free campus talent show</td></tr>
<tr><td>(j)</td><td><b>Public display</b> of an original or legally acquired copy, <b>not</b> by screen, film, slide, or digital projection</td><td>Gallery hanging a purchased painting</td></tr>
<tr><td>(k)</td><td>Use in <b>court proceedings</b> or <b>legal advice</b></td><td>Photo attached as evidence</td></tr>
</table>
<blockquote><b>Sec. 184.2:</b> apply the limitations so that the use (1) does <b>not conflict with normal exploitation</b> of the work and (2) does <b>not unreasonably prejudice</b> the right holder's legitimate interests.</blockquote>
<h4>Fair Use (Sec. 185)</h4>
<ul>
<li><b>185.1:</b> fair use for <b>criticism, comment, news reporting, teaching (including multiple copies for classroom use), scholarship, research, and similar purposes</b> is not infringement. <b>Decompilation</b> to achieve interoperability of an independently created program may also be fair use (understanding code to make another app work: fair; claiming it as your own: not).</li>
<li><b>185.2:</b> that a work is <b>unpublished</b> does not by itself bar fair use; the factors still apply.</li>
<li>Fair use is an <b>exception</b>, not an automatic right; the statutory factors must be met.</li>
</ul>
<table>
<tr><th>Factor (P-N-A-E)</th><th>Guide question</th></tr>
<tr><td><b>P</b>urpose and character of the use (commercial vs. non-profit educational)</td><td>Why am I using it?</td></tr>
<tr><td><b>N</b>ature of the copyrighted work</td><td>Factual or creative?</td></tr>
<tr><td><b>A</b>mount and substantiality of the portion used in relation to the whole</td><td>How much, and how important a part?</td></tr>
<tr><td><b>E</b>ffect on the potential market for or value of the work</td><td>Does my use replace or hurt the original's sales?</td></tr>
</table>
<h4>Copyright Infringement vs. Plagiarism</h4>
<table>
<tr><th></th><th>Copyright infringement</th><th>Plagiarism</th></tr>
<tr><td>Concerns</td><td><b>Permission</b> and the owner's <b>economic rights</b></td><td><b>Attribution</b>; academic or professional honesty (the unearned reputation from a false claim of authorship)</td></tr>
<tr><td>Governing rules</td><td>Statute (R.A. 8293)</td><td>Ethical codes, academic norms, institutional policies</td></tr>
<tr><td>Consequences</td><td>Injunction, damages, fines, criminal penalties</td><td>Censure, academic penalties, loss of credibility</td></tr>
</table>
<p>Both can apply to the same act.</p>` },
      { title: "Infringement Cases", content: `<h3>X. What Counts as Infringement: Cases</h3>
<p><b>Elements (COSAC):</b> (1) ownership of a <b>validly copyrighted</b> work by the complainant, and (2) <b>infringement</b> by the respondent. The act must fall within the Sec. 177 rights and <b>outside</b> Secs. 184 and 185.</p>
<h4>Habana v. Robles</h4>
<p>G.R. No. 131522, July 19, 1999, Pardo, J.</p>
<ul>
<li><b>Facts:</b> authors of <i>College English for Today</i> found that Robles's <i>Developing English Proficiency</i> closely tracked their content, illustrations, and examples (the same sample sentences with only dates and names changed) and reproduced Edmund Burke's parallelism example <i>without citing the author</i>.</li>
<li><b>Held:</b> <b>infringement; not fair use.</b> Substantial copying of text and examples without acknowledging the author is infringement even for academic purposes.</li>
<li><b>Doctrine (substantial reproduction test):</b> it is <b>not necessary to copy the entire work</b>, or even a large part. If so much is taken that the <b>value of the original is substantially diminished</b>, there is infringement.</li>
</ul>
<h4>NBI-Microsoft Corp. v. Beltron</h4>
<p>G.R. No. 147043, June 21, 2005, Carpio, J.</p>
<ul>
<li><b>Facts:</b> Beltron's Microsoft license allowed only one installed copy per customer machine and distribution of authorized copies. Microsoft terminated it for non-payment of royalties, then found Beltron selling unauthorized copies. An NBI test-buy and search seized <b>2,831 CD-ROMs</b>. The DOJ dismissed the complaint as a purely civil royalty dispute.</li>
<li><b>Held:</b> the DOJ <b>gravely abused its discretion</b>. Probable cause needs only a reasonable belief that the offense was committed. Copying, distribution, and sale were sufficiently shown, and the "installer" CDs were counterfeit per se. The imitation packaging showed <b>unfair competition</b> (Art. 189, RPC). Microsoft's remedies exist <b>independently of the license</b>.</li>
<li><b>Doctrine:</b> infringement is not only unauthorized <i>manufacturing</i> of works; it includes performing <b>any act covered by copyright law</b> without authority.</li>
</ul>
<h4>ABS-CBN v. Philippine Multi-Media System (PMSI)</h4>
<p>G.R. Nos. 175769-70</p>
<ul>
<li><b>Facts:</b> PMSI, a DTH satellite provider, carried ABS-CBN Channels 2 and 23 under the NTC's <b>Must-Carry Rule</b> (NTC Memo. Circular 04-08-88), which requires cable and broadcast satellite operators to carry TV broadcast signals.</li>
<li><b>Held:</b> <b>no infringement.</b> PMSI was not the origin of the programs and merely carried the signals <b>unaltered</b>.</li>
<li><b>Doctrine:</b> <b>mere retransmission of signals is not rebroadcasting.</b></li>
</ul>
<h4>COSAC, Inc. v. FILSCAP</h4>
<p>G.R. No. 222537, February 28, 2023, Hernando, J.</p>
<ul>
<li><b>Facts:</b> FILSCAP (a non-profit society of composers, authors, and publishers) held <b>deeds of assignment</b> from Filipino composers and <b>reciprocal representation agreements</b> with foreign societies. COSAC's Off the Grill bar played 25 musical works without a license or fees. COSAC argued that IPO Gazette publication was needed (Sec. 182), that it did not control what the band played, and that aired songs become public property.</li>
<li><b>RTC:</b> for FILSCAP; non-publication did not void the deeds. Awarded &#8369;317,050 license fees, &#8369;5,778.17 monitoring expenses, 6% interest from Feb. 13, 2006, and &#8369;52,003.47 attorney's fees. <b>CA:</b> sustained, but <b>deleted</b> the monitoring-expense award.</li>
<li><b>SC:</b> <b>petition denied; COSAC liable.</b>
<ul>
<li>Sec. 184.1(i) requires <b>no admission fee</b> <i>and</i> performance by a club or institution for <b>charitable or educational purposes only</b>, <b>not for profit</b>. The music attracted customers and increased sales, so it was <b>for profit</b>.</li>
<li>Fair use failed: the use was <b>public and commercial</b>, in a venue that was neither private nor charitable or religious, and worked against the owners' interests.</li>
</ul></li>
<li><b>Doctrine:</b> infringement occurs when copyrighted material is used <b>without authorization from the owner or their assignee</b>.</li>
</ul>
<h4>Practice Hypotheticals</h4>
<ul>
<li>A radio station pre-records a hit song without permission, plays it automatically at midnight, then destroys the copy. <b>Not liable:</b> temporary recording by a broadcaster for its own broadcast (Sec. 184.1[g]).</li>
<li>Aurea streams music from an illegal site and downloads it free. Likely <b>infringement</b> (unauthorized reproduction or distribution; not fair use).</li>
<li>Maica enters an essay contest using a quote she found on social media as her own, with no credit. <b>Plagiarism</b> (false claim of authorship); infringement is doubtful for a short quote.</li>
<li>Kyla posts film reviews with short snippets, discussing cinematography and naming the movie, director, and studio. <b>Fair use</b> (commentary, educational, limited portion, no market substitution).</li>
</ul>` },
      { title: "Term of Protection", content: `<h3>XI. Term of Protection (Secs. 213-215)</h3>
<table>
<tr><th>Work</th><th>Term</th></tr>
<tr><td>General: literary and artistic works (Secs. 172, 173), including posthumous works</td><td><b>Life of author + 50 years</b></td></tr>
<tr><td>Joint authorship</td><td>Life of the <b>last surviving</b> author + 50 years</td></tr>
<tr><td>Pseudonymous works</td><td>50 years from first lawful publication (or from making, if unpublished)</td></tr>
<tr><td><b>Applied art</b></td><td><b>25 years</b> from the making</td></tr>
<tr><td>Photographic works</td><td>50 years from first lawful publication (or from making, if unpublished)</td></tr>
<tr><td>Audiovisual works</td><td>50 years from first lawful publication (or from making, if unpublished)</td></tr>
</table>
<ul>
<li><b>Sec. 214, computation:</b> terms run from the date of death or publication, but are <b>always deemed to begin on January 1 of the year following</b> the event.</li>
<li><b>Sec. 215, related rights:</b> performers and sound recording producers get <b>50 years</b>, counted from the end of the year of the performance (unrecorded) or the end of the year of recording. Broadcasting organizations get <b>20 years</b> from the date of the broadcast. The extended term applies only to old works still protected under the prior law.</li>
</ul>
<blockquote>Moral-rights term (life + perpetuity) and resale right (life + 50): see <i>Author's Rights</i>.</blockquote>` },
      { title: "Remedies and Penalties", content: `<h3>XII. Enforcement: Remedies, Criminal Penalties, Prescription</h3>
<h4>Civil Remedies (Sec. 216.1)</h4>
<ul>
<li><b>(a) Injunction:</b> to restrain the infringement; the court may order the defendant to desist, including preventing entry into commerce of <b>imported infringing goods</b> right after customs clearance.</li>
<li><b>(b) Actual damages and profits:</b> actual damages (including legal costs and expenses) <b>plus the infringer's profits</b>. The plaintiff proves <b>sales only</b>; the defendant must prove <b>every element of cost</b> claimed. In lieu of these, the court may award such damages as appear <b>just</b>, which are <b>not a penalty</b>.</li>
<li><b>(c) Impounding:</b> delivery under oath, during the pendency of the action, of sales invoices and other sales documents, all allegedly infringing articles and packaging, and the implements for making them.</li>
<li><b>(d) Destruction:</b> delivery under oath, <b>without compensation</b>, of all infringing copies or devices and the plates, molds, or other means of making them.</li>
<li><b>(e) Other remedies:</b> other terms the court deems proper, wise, and equitable, including <b>moral and exemplary damages</b>, and destruction of infringing copies <b>even on acquittal</b> in a criminal case.</li>
<li><b>Sec. 216.2:</b> the court may order <b>seizure and impounding</b> of any article that may serve as evidence (Sec. 28, P.D. 49).</li>
</ul>
<table>
<tr><th>Injunction (Sec. 216.1[a])</th><th>Preliminary injunction</th></tr>
<tr><td>A copyright remedy against infringement; a <b>final</b> injunction that may <b>permanently</b> restrain the act</td><td>Governed by <b>Rule 58, Rules of Court</b>; a <b>provisional</b> remedy while the case is pending, to temporarily prevent further harm (<i>Del Rosario v. CA and Janito Corp.</i>, G.R. No. 115106, March 15, 1996)</td></tr>
</table>
<h4>Criminal Penalties (Sec. 217)</h4>
<p>Knowingly possessing an infringing copy of a copyrighted work <b>for selling, trade, distributing, or public exhibition</b> is an offense (Sec. 217.3).</p>
<table>
<tr><th>Offense</th><th>Imprisonment</th><th>Fine</th></tr>
<tr><td>1st</td><td>1 to 3 years</td><td>&#8369;50,000 to &#8369;150,000</td></tr>
<tr><td>2nd</td><td>3 years and 1 day to 6 years</td><td>&#8369;150,000 to &#8369;500,000</td></tr>
<tr><td>3rd and subsequent</td><td>6 years and 1 day to 9 years</td><td>&#8369;500,000 to &#8369;1,500,000</td></tr>
</table>
<ul>
<li><b>Sec. 217.2, setting the penalty:</b> the court considers (1) the <b>value of the infringing materials</b> the defendant produced or manufactured and (2) the <b>damage suffered</b> by the copyright owner.</li>
<li><b>Subsidiary imprisonment</b> (insolvency): if the convict has no property to pay the fine, he suffers subsidiary liability of <b>one day for each amount equivalent to the highest minimum wage rate</b> at the time of judgment (Art. 39, Revised Penal Code). It applies only when he cannot pay the fine and <b>cannot exceed one-third of the term of the sentence</b>.</li>
<li><b>Repetition of infringement</b> (cited as "Sec. 84" in the class report): if infringement is repeated by the infringer, or anyone in connivance with him, <b>after finality of judgment</b> against the infringer, the offenders are criminally liable, without prejudice to a civil action for damages. Penalty: <b>6 months to 3 years</b> imprisonment <b>and/or</b> a fine of <b>&#8369;100,000 to &#8369;300,000</b>, at the court's discretion.</li>
</ul>
<h4>Prescription</h4>
<p>Copyright infringement is <b>both a civil and a criminal offense</b>.</p>
<ul>
<li><b>Civil action (Sec. 226):</b> no damages may be recovered after <b>4 years</b> from the time the cause of action arose (Sec. 58, P.D. 49).</li>
<li><b>Criminal action:</b> <b>3 years</b> from the date of the commission of the crime (per the class report).</li>
</ul>` },
      { title: "Registration and Deposit", content: `<h3>XIII. Registration and Deposit of Work</h3>
<ul>
<li><b>Deposit rule (Sec. 191):</b> for works under Secs. 172.1, 172.2, and 172.3, within <b>three (3) weeks</b> register and deposit with the <b>National Library and the Supreme Court Library</b>, by personal delivery or registered mail, <b>two (2) complete copies</b> or reproductions in the form the library directors prescribe.</li>
<li><b>Failure to deliver (Sec. 26, P.D. 49):</b> the owner pays a <b>fine equal to the required fee per month of delay</b> <i>plus</i> the <b>retail price of the best edition</b> of the work, payable to the two libraries.</li>
<li><b>Ownership of deposits (Sec. 60, P.D. 49):</b> all copies deposited and instruments filed become <b>property of the Government</b>.</li>
<li><b>Effect:</b> registration and deposit are <b>purely for recording the date</b> of registration and deposit. They are <b>not conclusive</b> as to copyright ownership, term, or the rights of the owner (including neighboring rights). They are only <b>prima facie evidence</b> of validity and ownership, a <b>rebuttable presumption</b>.</li>
</ul>
<h4>Manly Sportswear Manufacturing, Inc. v. Dadodette Enterprises</h4>
<p>G.R. No. 165306, September 20, 2005, Ynares-Santiago, J.</p>
<ul>
<li><b>Facts:</b> on March 14, 2003, an NBI investigator applied before the Quezon City RTC for a search warrant against Dadodette for infringing Manly's sports articles. Dadodette moved to quash, arguing Manly's products already existed in the local and foreign markets. The RTC quashed the warrant, noting that Manly's certificate of registration was dated 2002 while an earlier registration existed. The CA denied Manly's petition for review.</li>
<li><b>Held:</b> <b>CA affirmed.</b> Copyright protects only <b>original intellectual creations</b> (Sec. 172). A Certificate of Copyright Registration is only a <b>rebuttable presumption</b>, not conclusive proof of copyrightability. With no copyrightable work, there was <b>no infringement</b> and <b>no probable cause</b> for the search warrant.</li>
<li><b>Doctrine:</b> the Certificate of Registration and Deposit merely serves as notice of recording and registration. It is <b>not conclusive proof of ownership</b> and does not automatically place the work under copyright protection. (Same principle as <i>Ching v. Salinas</i>.)</li>
</ul>` },
      { title: "Olaño v. Lim Eng Co", content: `<h3>XIV. Useful Articles: Olaño v. Lim Eng Co</h3>
<p>G.R. No. 195835, March 14, 2016, Reyes, J. (<a href="https://lawphil.net/judjuris/juri2016/mar2016/gr_195835_2016.html" target="_blank" rel="noopener">full text</a>)</p>
<h4>Facts</h4>
<ul>
<li>Lim Eng Co is Chairman of <b>LEC Steel Manufacturing Corporation (LEC)</b>, which specializes in architectural metal manufacturing. For the <b>Manansala Project</b> in Rockwell Center, LEC prepared the designs, drawings, and specifications for the interior and exterior <b>hatch doors</b>. After the plans were approved, LEC was subcontracted to manufacture and install the doors for the <b>7th to 22nd floors</b>. LEC later obtained <b>copyright registration</b> for the sketches and drawings.</li>
<li>Petitioners Sison Olaño, Sergio T. Ong, Marilyn O. Go, and Jap Fuk Hai, officers and/or directors of <b>Metrotech Steel Industries, Inc.</b>, were later subcontracted for the <b>23rd to 41st floors</b>. LEC claimed Metrotech's doors were <b>substantially identical</b> to its own and that Metrotech copied its copyrighted drawings, and filed a copyright infringement complaint.</li>
<li><b>NBI search:</b> finished and unfinished hatch doors found, but <b>no copies of LEC's copyrighted drawings</b>.</li>
<li><b>DOJ:</b> first found probable cause; on motion for reconsideration it <b>reversed and dismissed</b>, reasoning that LEC's copyright covered its <b>drawings</b>, while the physical doors were <b>useful articles</b> made for a functional purpose.</li>
<li><b>CA:</b> ruled against the DOJ and reinstated probable cause. Petitioners went to the Supreme Court.</li>
</ul>
<h4>Issues and Rulings</h4>
<table>
<tr><th>Issue</th><th>Ruling</th></tr>
<tr><td>1. Did the DOJ commit <b>grave abuse of discretion</b> in reversing its earlier finding of probable cause?</td><td><b>No.</b> The prosecutor and the DOJ reached different conclusions, but both rested on the <b>same uniform set of facts</b> (LEC's registered plans and Metrotech's later installation of similar doors). The shifting resolutions merely reflected an <b>evolving legal discourse</b> on whether the doors were copyrightable works or original ornamental designs.</td></tr>
<tr><td>2. Did Metrotech's manufacture of the hatch doors <b>infringe</b> LEC's copyrighted drawings and designs?</td><td><b>No. Petition granted; complaint dismissed.</b> Hatch doors are <b>functional, useful articles</b>, excluded from copyright eligibility under the IP Code. A registration certificate covering illustrations, maps, plans, sketches, charts, and three-dimensional works relating to geography, topography, architecture, or science gives <b>no exclusive monopoly over manufacturing the functional items depicted</b>. LEC failed to show that the physical objects themselves had copyright, and offered <b>no proof that petitioners directly reproduced any protected drawing</b>. No probable cause.</td></tr>
</table>
<h4>Doctrine</h4>
<ol>
<li><b>Copyright vs. patent:</b> copyright protects only the <b>original expression</b> of an idea, not the underlying art or utilitarian object disclosed.</li>
<li><b>Denicola test (conceptual separability):</b> a useful article cannot be copyrighted when its aesthetic elements are <b>totally merged with functional considerations</b>, with no ornamental or artistic features that can exist <b>independently</b> of its utilitarian design.</li>
</ol>
<blockquote><b>Exam tip:</b> a <b>drawing</b> of a useful article may be copyrighted, but the copyright in the drawing does not give the owner control over <b>making the article</b>. To protect the functional thing itself, think <b>patent or utility model</b>, not copyright. Compare <i>Ching v. Salinas</i> (Protected Works) and <i>Manly Sportswear</i> (Registration and Deposit).</blockquote>` },
      { title: "E-Commerce Act", content: `<h3>XV. E-Commerce Act (R.A. 8792) in Relation to Copyright</h3>
<p>The E-Commerce Act of 2000 extends legal protection to electronic documents and also reaches <b>online piracy</b> of copyrighted works. (The report's title slide says R.A. 8791; the Act is <b>R.A. No. 8792</b>, as its later slides and the NBI release state.)</p>
<h4>Sec. 5: Key Definitions</h4>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>(c) Electronic data message</b></td><td>Information <b>generated, sent, received, or stored</b> by electronic, optical, or similar means.</td></tr>
<tr><td><b>(f) Electronic document</b></td><td>Information or the representation of information, data, figures, symbols, or other modes of written expression, by which a <b>right is established or an obligation extinguished</b>, or by which a <b>fact may be proved and affirmed</b>, which is received, recorded, transmitted, stored, processed, retrieved, or produced electronically.</td></tr>
</table>
<h4>Secs. 30 to 33</h4>
<table>
<tr><th>Section</th><th>Rule</th></tr>
<tr><td><b>Sec. 30: Liability of a service provider</b></td><td>Except as otherwise provided, no person or party is subject to <b>civil or criminal liability</b> for an electronic data message or document where the person, acting as a <b>service provider</b> (Sec. 5), <b>merely provides access</b>, if the liability is founded on the <b>making, publication, dissemination, or distribution</b> of the material or any statement in it, <b>including possible infringement of any right</b> subsisting in or in relation to the material. A mere conduit is not the infringer. <i>The full text attaches provisos (e.g., no actual knowledge of the unlawful or infringing character, no direct financial benefit from the infringement, no direct participation or inducement); confirm against the Act.</i></td></tr>
<tr><td><b>Sec. 31: Lawful access</b></td><td>Access to an electronic file, or an electronic signature of an electronic data message or document, is authorized and enforced only in favor of the person or entity with a <b>legal right to the possession or use</b> of the plaintext, signature, or file, or <b>solely for authorized purposes</b>. The <b>electronic key</b> for identity or integrity may not be made available to anyone without the consent of the person or entity lawfully holding it.</td></tr>
<tr><td><b>Sec. 32: Obligation of confidentiality</b></td><td>Except for purposes authorized under the Act, anyone who obtained access to any electronic key, electronic data message or document, book, register, correspondence, information, or other material <b>pursuant to powers conferred by the Act</b> shall <b>not convey to or share</b> it with any other person.</td></tr>
<tr><td><b>Sec. 33(b): Piracy</b></td><td>Unauthorized <b>copying, reproduction, dissemination, distribution, importation, use, removal, alteration, substitution, modification, storage, uploading, downloading, communication, making available to the public, or broadcasting</b> of protected material, electronic signature, or copyrighted works (including legally protected sound recordings or phonograms, or information material on protected works) <b>through telecommunication networks such as the internet</b>, in a manner that infringes intellectual property rights.</td></tr>
</table>
<h4>Penalty for Piracy (Sec. 33[b])</h4>
<ul>
<li><b>Fine:</b> minimum of <b>&#8369;100,000</b>; maximum <b>commensurate to the damage incurred</b>.</li>
<li><b>Imprisonment:</b> <b>mandatory</b>, <b>6 months to 3 years</b>.</li>
</ul>
<blockquote><b>Remember:</b> the key words are <b>"through the use of telecommunication networks, such as the internet."</b> The same copying done offline falls under the IP Code (Sec. 217), not Sec. 33(b).</blockquote>` },
      { title: "Cybercrime and Cyber Infringement", content: `<h3>XVI. Cybercrime Prevention Act (R.A. 10175) and Cyber Infringement</h3>
<h4>Declaration of Policy</h4>
<p>The State recognizes the vital role of information and communications industries (content production, telecommunications, broadcasting, electronic commerce, data processing) in national development, and the need to protect the <b>integrity of computer systems, networks, and databases</b>, and the <b>confidentiality, integrity, and availability</b> of the data in them, from misuse, abuse, and illegal access. The State shall adopt powers to prevent and combat these offenses, domestically and through <b>international cooperation</b>.</p>
<h4>What Is Cybercrime?</h4>
<p>An unlawful act carried out using information and communication technology (ICT) to either <b>target</b> networks, systems, data, or websites, or to <b>facilitate</b> a crime (United Nations). Merriam-Webster adds criminal activity such as fraud, theft, or distribution of child pornography committed using a computer, especially to illegally access, transmit, or manipulate data.</p>
<h4>Cybercrime Offenses (Sec. 4)</h4>
<table>
<tr><th>Group</th><th>Offenses</th></tr>
<tr><td><b>A. Against confidentiality, integrity, and availability of computer data and systems</b></td><td>
<b>(1) Illegal access:</b> access to the whole or any part of a computer system <b>without right</b>.<br>
<b>(2) Illegal interception:</b> interception by technical means, without right, of any <b>non-public</b> transmission of computer data to, from, or within a system (including electromagnetic emissions).<br>
<b>(3) Data interference:</b> intentional or reckless <b>alteration, damaging, deletion, or deterioration</b> of computer data, electronic document, or electronic data message, without right, including introducing or transmitting viruses.<br>
<b>(4) System interference:</b> intentional alteration or reckless <b>hindering or interference</b> with the functioning of a computer or network (inputting, transmitting, damaging, deleting, altering, or suppressing data or programs), without right, including viruses.<br>
<b>(5) Misuse of devices:</b> (i) use, production, sale, procurement, importation, distribution, or making available, without right, of (aa) a <b>device or computer program</b> designed or adapted primarily to commit any offense under the Act, or (bb) a <b>computer password, access code,</b> or similar data, with intent to use it to commit the offenses; (ii) <b>possession</b> of such an item with intent to use it.<br>
<b>(6) Cyber-squatting:</b> acquiring a <b>domain name</b> in <b>bad faith</b> to profit, mislead, destroy reputation, or deprive others of registering it, if the name is (i) identical or confusingly similar to a <b>registered trademark</b> at the time of registration, (ii) identical or similar to the <b>name of another person</b>, and (iii) acquired without right or with IP interests in it.</td></tr>
<tr><td><b>B. Computer-related offenses</b></td><td>
<b>(1) Computer-related forgery:</b> input, alteration, or deletion of computer data without right resulting in <b>inauthentic data</b>, intended to be treated as authentic for legal purposes; or knowingly using such data to perpetuate a fraudulent or dishonest design.<br>
<b>(2) Computer-related fraud:</b> unauthorized input, alteration, or deletion of data or programs, or interference with a system, <b>causing damage</b> with fraudulent intent. If no damage has yet been caused, the penalty is <b>one degree lower</b>.<br>
<b>(3) Computer-related identity theft:</b> intentional acquisition, use, misuse, transfer, possession, alteration, or deletion of <b>identifying information</b> of another (natural or juridical) without right. If no damage yet, <b>one degree lower</b>.</td></tr>
<tr><td><b>C. Content-related offenses</b></td><td>(1) Cybersex; (2) child pornography; (3) unsolicited commercial communications; (4) libel.</td></tr>
</table>
<h4>Other Offenses and Linking Provisions</h4>
<table>
<tr><th>Section</th><th>Rule</th></tr>
<tr><td><b>Sec. 5(a)</b> Aiding or abetting</td><td>Anyone who <b>willfully abets or aids</b> in committing any enumerated offense is liable.</td></tr>
<tr><td><b>Sec. 5(b)</b> Attempt</td><td>Anyone who <b>willfully attempts</b> to commit any enumerated offense is liable.</td></tr>
<tr><td><b>Sec. 6</b></td><td>All crimes under the <b>Revised Penal Code and special laws</b>, if committed <b>by, through, and with the use of ICT</b>, are covered by the Act, and the penalty is <b>one (1) degree higher</b> than that provided by the RPC and special laws.</td></tr>
<tr><td><b>Sec. 7</b> Liability under other laws</td><td>Prosecution under the Act is <b>without prejudice</b> to liability under the RPC or special laws.</td></tr>
</table>
<blockquote><b>Link to copyright:</b> copyright infringement is a crime under a <b>special law</b> (the IP Code). If it is committed through ICT, <b>Sec. 6</b> brings it under R.A. 10175 and raises the penalty one degree. <b>Sec. 7</b> allows the IP Code and E-Commerce Act charges to be filed too.</blockquote>
<p><i>Outside the report (verify): in </i>Disini v. Secretary of Justice<i> the Supreme Court struck down or limited some provisions, including the unsolicited commercial communications offense, so check the current status before relying on the content-related list.</i></p>
<h4>Cyber Infringement</h4>
<p>A copyrighted work is infringed when, <b>without license or consent</b> of the owner, a person does or authorizes the doing of any act reserved to the owner, or uses it for profit, or makes for sale or hire, sells, distributes, or exhibits in public infringing copies for trade or to prejudice the owner or the public, unless covered by exceptions and limitations. In <b>cyberspace</b>, this includes unauthorized use, copying, or posting of an original literary, graphic, musical, software, film, artwork, or multimedia work (Pandey, 2022).</p>
<table>
<tr><th>Form</th><th>Meaning</th></tr>
<tr><td><b>Digital piracy</b></td><td>Illegal <b>reproduction and distribution</b> of copyrighted content (software, e-books, movies, music, TV programs, video games, photos) through <b>electronic means for profit</b>.</td></tr>
<tr><td><b>Freebooting</b></td><td>Unauthorized <b>posting or re-uploading</b> of another creator's original video for <b>views or monetization</b>.</td></tr>
</table>
<h4>Case Application: Tacloban Case (NBI Press Release, Aug. 4, 2025)</h4>
<ul>
<li><b>Facts:</b> the subject, Boanerges Ty Hidalgo, was distributing <b>video lectures and review materials</b> of the Jurists review center through a Facebook group (<i>Philippine Law Student Help Group</i>) <b>for money, without the owner's consent</b>. NBI-CCD agents ran a <b>test-buy</b>: he agreed to copy the materials to an external drive and to meet the poseur-client in Tacloban City.</li>
<li><b>Charges for inquest:</b> (1) <b>Misuse of Devices</b>, Sec. 4(a)(5)(i)(aa) in relation to (5)(ii), R.A. 10175; (2) <b>Piracy</b>, Sec. 33(b), R.A. 8792, in relation to Sec. 6, R.A. 10175; (3) <b>Copyright infringement</b>, Sec. 217.1, R.A. 8293.</li>
<li><b>Why it is cyber infringement:</b> (a) copyrightable work, (b) distribution without consent, (c) for commercial use, (d) in cyberspace.</li>
</ul>
<h4>Penalties: IP Code vs. Cybercrime Act</h4>
<p>Penalties for IPC infringement are in <i>Remedies and Penalties</i>. Under Sec. 6 of R.A. 10175 each is raised <b>one degree</b>, per the report:</p>
<table>
<tr><th>Offense (R.A. 8293, Sec. 217)</th><th>Through ICT (R.A. 8293 + R.A. 10175)</th></tr>
<tr><td>1 to 3 years + &#8369;50,000 to &#8369;150,000</td><td>3 to 6 years and increased fines</td></tr>
<tr><td>3 years and 1 day to 6 years + &#8369;150,000 to &#8369;500,000</td><td>6 to 9 years and increased fines</td></tr>
<tr><td>6 years and 1 day to 9 years + &#8369;500,000 to &#8369;1,500,000</td><td>9 to 12 years (or more) and increased fines</td></tr>
</table>
<h4>"Ctto" Is Not a Defense</h4>
<p>Writing "credits to the owner" does not cure unauthorized use. Credit (attribution) is not the owner's <b>consent</b>. Liability is judged by the <b>fair use factors</b> (P-N-A-E, Sec. 185; see <i>Limitations and Fair Use</i>): the <b>purpose and character</b> of the use (commercial or non-profit educational), the <b>nature</b> of the work, the <b>amount and substantiality</b> used, and the <b>effect on the market</b> for the work.</p>` },
      { title: "Case Index and Self-Test", content: `<h3>XVII. Case Index</h3>
<table>
<tr><th>Case</th><th>G.R. No. / Date</th><th>Topic</th><th>Lesson tab</th></tr>
<tr><td>Kho v. CA</td><td>115758 &middot; Mar. 19, 2002</td><td>Copyright vs. trademark vs. patent</td><td>Copyright Basics</td></tr>
<tr><td>Republic (PNP) v. Tupaz</td><td>197335 &middot; Sept. 7, 2020</td><td>Derivative works; idea-contributor not an author</td><td>Protected Works</td></tr>
<tr><td>Ching v. Salinas</td><td>161295 &middot; June 29, 2005</td><td>Utility models not copyrightable</td><td>Protected Works</td></tr>
<tr><td>Joaquin v. Drilon</td><td>108946 &middot; Jan. 28, 1999</td><td>Game-show format is an idea</td><td>Unprotected Matter</td></tr>
<tr><td>ABS-CBN v. Gozon</td><td>195956 &middot; Mar. 11, 2015</td><td>News vs. footage; copyrightability vs. fair use</td><td>Unprotected Matter</td></tr>
<tr><td>Domingo v. CSC and Manalo</td><td>236050 &middot; June 17, 2020</td><td>Government works; free use</td><td>Gov't Works</td></tr>
<tr><td>Habana v. Robles</td><td>131522 &middot; July 19, 1999</td><td>Substantial reproduction</td><td>Infringement Cases</td></tr>
<tr><td>NBI-Microsoft v. Beltron</td><td>147043 &middot; June 21, 2005</td><td>Software piracy; probable cause</td><td>Infringement Cases</td></tr>
<tr><td>ABS-CBN v. PMSI</td><td>175769-70</td><td>Must-carry; retransmission is not rebroadcasting</td><td>Infringement Cases</td></tr>
<tr><td>COSAC v. FILSCAP</td><td>222537 &middot; Feb. 28, 2023</td><td>Public performance for profit</td><td>Infringement Cases</td></tr>
<tr><td>Del Rosario v. CA and Janito</td><td>115106 &middot; Mar. 15, 1996</td><td>Preliminary injunction</td><td>Remedies and Penalties</td></tr>
<tr><td>Manly Sportswear v. Dadodette</td><td>165306 &middot; Sept. 20, 2005</td><td>Registration is only prima facie</td><td>Registration and Deposit</td></tr>
<tr><td>Olaño v. Lim Eng Co</td><td>195835 &middot; Mar. 14, 2016</td><td>Useful articles; drawings vs. the articles depicted (Denicola test)</td><td>Olaño v. Lim Eng Co</td></tr>
</table>
<h3>XVIII. Self-Test</h3>
<ol>
<li>When does copyright protection begin? <i>At creation; registration is not required (Sec. 172.2).</i></li>
<li>Can a derivative work extend the original author's copyright? <i>No (Sec. 173.2).</i></li>
<li>The PNP supplied the design concepts. Is it the author? <i>No; one who merely contributes ideas is not an author (Tupaz).</i></li>
<li>A private firm wants to sell products using a government infographic. What is needed? <i>Prior approval of the agency; royalties may be imposed (Sec. 176.1).</i></li>
<li>May a student quote a statute in a paper without permission? <i>Yes; Sec. 176.1 free-use exception.</i></li>
<li>An employee writes a manual outside regular duties using company time and equipment. Who owns it? <i>The employee.</i></li>
<li>List the four fair-use factors. <i>P-N-A-E: Purpose, Nature, Amount, Effect on market.</i></li>
<li>A bar plays copyrighted songs without a license, arguing it "attracts customers." <i>Fails; performance for profit, outside Sec. 184.1(i) and fair use (COSAC).</i></li>
<li>Do moral rights expire 50 years after death? <i>No; they are perpetual (Sec. 198).</i></li>
<li>A painting first sold for &#8369;200,000 is resold for &#8369;1,000,000. What does the artist receive? <i>5% of gross proceeds = &#8369;50,000 (Sec. 200).</i></li>
<li>Is a certificate of copyright registration conclusive proof of ownership? <i>No; prima facie only (Manly).</i></li>
<li>Prescription periods? <i>Civil damages: 4 years; criminal: 3 years per the class report.</i></li>
<li>LEC copyrighted its hatch-door drawings. Can it stop others from making the doors? <i>No; doors are useful articles, and a copyright in drawings gives no monopoly over making the item (Olaño v. Lim Eng Co).</i></li>
<li>A person sells pirated review videos through a Facebook group. Which laws apply? <i>IP Code Sec. 217.1 (infringement); E-Commerce Act Sec. 33(b) (piracy); Cybercrime Act Sec. 4(a)(5) and Sec. 6 (penalty one degree higher).</i></li>
<li>Is "ctto" a defense to infringement? <i>No; attribution is not consent. Apply the fair use factors.</i></li>
</ol>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Law on Business Protection.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra1997/ra_8293_1997.html" target="_blank" rel="noopener">Intellectual Property Code (R.A. 8293)</a></td><td>Copyright, patents, trademarks</td></tr><tr><td><a href="https://lawphil.net/judjuris/juri2016/mar2016/gr_195835_2016.html" target="_blank" rel="noopener">Olaño v. Lim Eng Co (G.R. 195835)</a></td><td>Useful articles</td></tr><tr><td><a href="https://www.officialgazette.gov.ph/2000/06/14/republic-act-no-8792-s-2000/" target="_blank" rel="noopener">E-Commerce Act (R.A. 8792)</a></td><td>Secs. 5, 30-33</td></tr><tr><td><a href="https://nbi.gov.ph/press_releases/2025/08042025/8300/" target="_blank" rel="noopener">NBI Press Release (Aug. 4, 2025)</a></td><td>Tacloban case</td></tr><tr><td><a href="https://www.ipophil.gov.ph/" target="_blank" rel="noopener">Intellectual Property Office of the Philippines</a></td><td>Registries, rules, forms</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Philippine Constitution and Government",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Philippine Constitution and Government.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/consti/cons1987.html" target="_blank" rel="noopener">1987 Constitution</a></td><td>Full text, Lawphil Project</td></tr><tr><td><a href="https://lawphil.net/consti/cons1935.html" target="_blank" rel="noopener">1935 Constitution</a></td><td>For comparison</td></tr><tr><td><a href="https://lawphil.net/consti/cons1973.html" target="_blank" rel="noopener">1973 Constitution</a></td><td>For comparison</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Retail Trade Laws & Consumer Act with e-Commerce Law",
    sub: "Consumer Act, Lemon Law, Price Act, Internet Transactions Act, Electronic Evidence",
    lessons: [
      { title: "Rights and Safety", content: `<h3>I. Consumer Act of the Philippines (R.A. 7394)</h3>
<p>The Consumer Act protects consumers, promotes their general welfare, and sets standards of conduct for business and industry. Its declared objectives: protection against health and safety hazards, deceptive and unfair sales practices, provision of information and education, adequate redress, and consumer participation in policy-making.</p>
<h4>A. Important Consumer Rights</h4>
<ol>
<li>Protection against hazardous products and services;</li>
<li>Protection against deceptive, unfair, and unconscionable sales practices;</li>
<li>Protection against false or misleading advertising;</li>
<li>Information necessary to make an intelligent choice;</li>
<li>Fair and reasonable prices;</li>
<li>Legal redress and compensation;</li>
<li>Consumer education; and</li>
<li>Representation in the formulation of consumer policies.</li>
</ol>
<p>These rights apply not only to completed sales but also to offers, advertisements, lease transactions, credit transactions, and other consumer transactions.</p>
<h4>B. Hazardous Substances and Product Safety</h4>
<p>The Act regulates products that may be hazardous to health, safety, or property. Manufacturers, importers, distributors, and sellers may be required to provide warnings, labels, handling instructions, and other safety information.</p>
<p>A product may be considered <b>unsafe</b> when:</p>
<ul>
<li>It contains a defect that may injure consumers;</li>
<li>It lacks adequate warnings or instructions;</li>
<li>It is adulterated or contaminated;</li>
<li>It does not conform to mandatory product standards; or</li>
<li>Its packaging or labeling conceals a material danger.</li>
</ul>
<blockquote><b>Example:</b> A cleaning product contains a corrosive chemical but is sold without a warning that it can cause severe burns. Even if it performs its intended function, the failure to warn may be a consumer-protection violation.</blockquote>
<blockquote><i>Department of Health v. Nestle Philippines, Inc.</i>: the agency found substantial evidence of a violation after a milk product was found to contain live insect larvae and to be unfit for human consumption.</blockquote>` },
      { title: "Sales Practices", content: `<h3>II. Deceptive, Unfair and Unconscionable Sales Practices; Weights and Measures</h3>
<h4>C. Deceptive Sales Acts or Practices</h4>
<p>A sales act is deceptive when, before, during, or after a consumer transaction, the seller or supplier uses <b>concealment, false representation, or fraudulent manipulation</b> to induce the consumer to enter into the transaction.</p>
<p>Examples: falsely representing that a product:</p>
<ul>
<li>Has a sponsorship, approval, performance, ingredient, accessory, use, or benefit that it does not have;</li>
<li>Is of a particular quality, grade, style, or model when it is not;</li>
<li>Is new, original, or unused when it is reconditioned or second-hand;</li>
<li>Is available for a particular reason when that is false;</li>
<li>Is offered at a special price advantage when no real price advantage exists;</li>
<li>Requires repair or replacement when it does not; or</li>
<li>Has a warranty or warranty limitation that it does not actually have.</li>
</ul>
<blockquote><b>Example:</b> A dealer sells a reconditioned vehicle described as "brand new." This is deceptive even if the buyer does not prove an express oral statement; the representation may arise from the seller's conduct, documents, display, or manner of sale. The Supreme Court recognized that representing a second-hand or altered product as brand new may authorize the DTI to order rescission and restitution, together with administrative sanctions.</blockquote>
<h4>D. Unfair or Unconscionable Sales Practices</h4>
<p>A transaction is unfair or unconscionable when the seller takes advantage of the consumer's:</p>
<ul>
<li>Physical or mental infirmity;</li>
<li>Ignorance or illiteracy;</li>
<li>Inability to understand the agreement;</li>
<li>Lack of time; or</li>
<li>Vulnerability arising from the surrounding circumstances.</li>
</ul>
<p>The resulting transaction must be <b>grossly inimical</b> to the consumer's interests or <b>grossly one-sided</b> in favor of the seller. Relevant circumstances:</p>
<ul>
<li>A price grossly higher than that of similar products;</li>
<li>The consumer's inability to obtain a substantial benefit;</li>
<li>The seller's knowledge that the consumer could not reasonably pay the obligation in full; and</li>
<li>Excessive one-sidedness in favor of the seller.</li>
</ul>
<blockquote><b>Example:</b> A seller persuades an elderly consumer who cannot understand English to sign a long-term installment contract for a &#8369;5,000 product at a total payable of &#8369;100,000, without explaining the terms. This may be challenged as unconscionable.</blockquote>
<blockquote><i>Aowa</i>: the Supreme Court recognized the DTI's authority to investigate and sanction continuing deceptive, unfair, or unconscionable sales practices even when some individual consumer complaints had been settled.</blockquote>
<h4>E. Weights and Measures</h4>
<p>Accurate and properly calibrated weighing and measuring instruments are required. Sellers must not:</p>
<ul>
<li>Use tampered weighing scales;</li>
<li>Deliver less than the represented quantity;</li>
<li>Manipulate measurements;</li>
<li>Use false or misleading units; or</li>
<li>Misrepresent net contents.</li>
</ul>
<blockquote><b>Example:</b> A retailer advertises one kilogram of rice but uses a tampered scale that delivers only 900 grams. This is a violation even if the price per kilogram is otherwise reasonable.</blockquote>
<p><b>Key point:</b> It is not merely about whether the price is displayed. The quantity actually delivered must correspond to the quantity represented.</p>` },
      { title: "Warranties and Liability", content: `<h3>III. Warranties and Liability for Defective Products</h3>
<h4>F. Warranties</h4>
<p>A warranty is an assurance regarding the quality, condition, performance, or utility of a product or service.</p>
<ul>
<li><b>Express warranty</b> arises from statements on labels or packaging; written warranties; advertisements; product descriptions; sales representations; or specific promises by the seller or manufacturer.</li>
<li><b>Implied warranty</b> arises by operation of law: goods are reasonably fit for their ordinary purpose and correspond to their description. A seller cannot defeat consumer rights with a vague disclaimer that contradicts a specific product representation.</li>
</ul>
<h4>Remedies for defective goods (Art. 100, R.A. 7394)</h4>
<p>Suppliers of durable or non-durable consumer products are <b>jointly liable</b> for imperfections that:</p>
<ul>
<li>Render the product unfit or inadequate for its intended use;</li>
<li>Decrease its value; or</li>
<li>Make it inconsistent with information on the container, packaging, labels, publicity, or advertisements.</li>
</ul>
<p>The consumer may first demand replacement of the imperfect parts. If the imperfection is <b>not corrected within 30 days</b>, the consumer may choose:</p>
<ol>
<li>Replacement of the product;</li>
<li>Immediate reimbursement of the amount paid, with monetary updating, without prejudice to damages; or</li>
<li>Proportionate price reduction.</li>
</ol>
<p>The parties may modify the correction period, but it must be <b>not less than 7 days nor more than 180 days</b>.</p>
<blockquote><b>Example:</b> A new refrigerator repeatedly fails to cool and the supplier does not fix it within 30 days. The consumer may elect replacement, refund, or proportionate price reduction, subject to statutory conditions.</blockquote>
<blockquote><i>Toyota Motors Phils. v. Aguilar et al.</i> (2021): suppliers and distributors may be solidarily liable for product imperfections covered by Art. 100.</blockquote>
<h4>G. Liability for Defective Products and Services</h4>
<p>Liability falls on manufacturers, producers, importers, distributors, suppliers, and service providers for defective or unsafe products and services, subject to statutory requirements and defenses. Potentially liable: the manufacturer; the importer; the distributor; the retailer or supplier; and the service provider.</p>
<table>
<tr><th>Defect category</th><th>Meaning</th></tr>
<tr><td>Manufacturing defect</td><td>The particular product deviates from the intended design.</td></tr>
<tr><td>Design defect</td><td>The design itself creates an unreasonable danger.</td></tr>
<tr><td>Failure to warn</td><td>The product lacks sufficient safety instructions or warnings.</td></tr>
</table>
<blockquote><b>Example:</b> A pressure cooker explodes because of a design defect. The manufacturer and other entities in the distribution chain may face civil, administrative, or criminal liability depending on the facts.</blockquote>` },
      { title: "Labels, Ads, Repair, Credit", content: `<h3>IV. Labeling, Advertising, Repair Firms and Consumer Credit</h3>
<h4>H. Labeling and Fair Packaging</h4>
<p>Labels and packaging must be accurate and sufficient. Depending on the product: product identity; net quantity; ingredients; manufacturer, distributor, or importer; country of origin; directions for use; warnings and precautions; expiration or durability information; applicable standards or registration information.</p>
<p>Packaging must not mislead consumers about quantity, quality, composition, or origin.</p>
<blockquote><b>Example:</b> A box looks full but holds only half the amount suggested. Even if the net weight is technically stated in small print, the overall presentation may be misleading.</blockquote>
<h4>I. Advertising and Sales Promotion</h4>
<p>Advertising must be truthful, substantiated, and not misleading. A business must not advertise:</p>
<ul>
<li>A false price reduction;</li>
<li>A nonexistent limited supply;</li>
<li>A product benefit it cannot support;</li>
<li>A nonexistent endorsement;</li>
<li>A warranty that is not honored; or</li>
<li>A promotional prize or condition that is not actually available.</li>
</ul>
<p>Sales promotions may require permits and compliance with DTI rules. In <i>Aowa</i>, the DTI considered the absence of a required sales promotion permit and the continuing complaints against the business.</p>
<blockquote><b>Example:</b> A store advertises "50% off" after raising the price just before the promotion. The ad may be deceptive if the discount is not a genuine price advantage.</blockquote>
<h4>J. Regulation of Repair and Service Firms</h4>
<p>Repair and service establishments must:</p>
<ul>
<li>State the nature and cost of the repair;</li>
<li>Obtain consumer authorization for additional work;</li>
<li>Provide an estimate when appropriate;</li>
<li>Use suitable replacement parts;</li>
<li>Avoid unnecessary repairs;</li>
<li>Return replaced parts when requested or required; and</li>
<li>Provide records, invoices, or receipts.</li>
</ul>
<p>A provider commits a deceptive act when it represents that a repair is necessary when it is not (<i>Autozentrum Alabang, Inc. v. Bernardo et al.</i>, 2016).</p>
<blockquote><b>Example:</b> A shop says a transmission must be replaced when only an electrical connection is loose. The shop may be liable for deceptive conduct and for unauthorized charges.</blockquote>
<h4>K. Consumer Credit Transactions</h4>
<p>Credit granted primarily for personal, family, household, or agricultural purposes. The consumer should be informed of the material terms:</p>
<ul>
<li>Cash price;</li>
<li>Down payment;</li>
<li>Amount financed;</li>
<li>Interest or finance charges;</li>
<li>Installment amount;</li>
<li>Number and schedule of payments;</li>
<li>Penalties and other charges;</li>
<li>Security or collateral; and</li>
<li>Consequences of default.</li>
</ul>
<blockquote><b>Example:</b> A financing company advertises a phone for "&#8369;1,000 monthly" without disclosing 36 payments and a total of &#8369;36,000. This may be misleading if it conceals the total credit cost.</blockquote>` },
      { title: "NCAC and Prescription", content: `<h3>V. National Consumer Affairs Council and Prescription</h3>
<h4>L. National Consumer Affairs Council</h4>
<p>The Council coordinates government and consumer efforts in implementing consumer policy. Functions:</p>
<ul>
<li>Coordination among government agencies;</li>
<li>Consumer information and education;</li>
<li>Consultation with consumer organizations;</li>
<li>Assistance in policy formulation; and</li>
<li>Promotion of effective consumer protection mechanisms.</li>
</ul>
<p>It differs from agencies that directly adjudicate or enforce specific complaints, such as the DTI, DOH, FDA, BSP, NTC, or other sectoral regulators.</p>
<h4>M. Prescription</h4>
<p>Prescription is the period within which an action, complaint, or prosecution must be commenced. It depends on:</p>
<ul>
<li>The nature of the violation;</li>
<li>Whether the case is civil, administrative, or criminal;</li>
<li>The specific provision invoked;</li>
<li>The date of discovery or commission; and</li>
<li>Any continuing or repeated violation.</li>
</ul>
<p>A business cannot automatically defeat an administrative complaint merely by asserting that some earlier complaints are prescribed. The nature of the charge and the existence of continuing violations must be examined.</p>
<blockquote><i>Aowa</i>: the Supreme Court upheld the DTI's authority to act on evidence of continuing violations despite the respondent's argument that several complaints were already prescribed.</blockquote>` },
      { title: "Lemon Law", content: `<h3>VI. Philippine Lemon Law (R.A. 10642)</h3>
<p>Applies principally to <b>brand-new motor vehicles</b> purchased in the Philippines. The consumer must allow the manufacturer, distributor, or dealer a reasonable number of attempts to repair a nonconformity. If the vehicle still suffers from the same nonconformity despite the required repair opportunities, the consumer may invoke the statutory remedies, subject to the law's requirements and procedures.</p>
<p>Possible remedies: replacement of the vehicle; refund of the purchase price, subject to statutory deductions; or other remedies provided by law.</p>
<blockquote><b>Not the exclusive remedy.</b> <i>DTI v. Toyota Balintawak, Inc.</i>: consumers may also pursue remedies under R.A. 7394 or other applicable laws because the Lemon Law preserves rights available under other statutes.</blockquote>
<h4>Motor Vehicle</h4>
<p>A brand-new, self-propelled, four-wheeled road vehicle designed to carry passengers: sedans; coupes; station wagons; convertibles; pick-ups; vans; sports utility vehicles; and Asian Utility Vehicles.</p>
<p><b>Excluded:</b> motorcycles, buses, dump trucks, delivery trucks, heavy equipment, tractors used exclusively for agricultural purposes, and other vehicles specifically excluded by the statute.</p>
<h4>Four-Repair Rule</h4>
<p>Lemon Law rights may be invoked only after:</p>
<ul>
<li>At least <b>four separate repair attempts</b>;</li>
<li>By the <b>same</b> manufacturer, distributor, authorized dealer, or retailer; and</li>
<li>Involving the <b>same complaint</b>.</li>
</ul>
<p>Four unrelated repairs for four different problems may not satisfy the requirement. <i>Example of four attempts, same complaint:</i> (1) transmission jerking; (2) transmission software reprogramming; (3) replacement of the transmission control module; (4) replacement of the transmission assembly. The consumer should document that all four visits concerned the same underlying defect.</p>
<h4>Lemon Law Rights Period</h4>
<p>Ends on the <b>earlier</b> of: (1) twelve months from the original delivery; or (2) the first 20,000 kilometers of operation after delivery. Whichever occurs first controls.</p>
<blockquote><b>Example:</b> Delivered January 1, 2026. The twelve-month period ends January 1, 2027, but if the vehicle reaches 20,000 km on September 1, 2026, the rights period ends September 1, 2026. The consumer must report the nonconformity and pursue the remedy within the applicable period.</blockquote>
<h4>Nonconformity</h4>
<p>A defect or condition that: (1) substantially impairs the vehicle's use, value, or safety; (2) prevents the vehicle from conforming to the manufacturer's or distributor's standards or specifications; and (3) cannot be repaired.</p>
<p>It must <b>not</b> have resulted from: the consumer's noncompliance with warranty obligations; unauthorized modifications; abuse or neglect; accident; or force majeure.</p>
<h4>Written Notice of Availment</h4>
<p>Before using the remedy, the consumer must give written notice to the manufacturer, distributor, authorized dealer, or retailer of (1) the unresolved complaint and (2) the intention to invoke Lemon Law rights. The notice must be made <b>within the rights period</b>. The warranty booklet must state the form and manner of valid notice and the consumer's responsibilities.</p>
<h4>Remedies Under the Lemon Law</h4>
<p>If the DTI finds a nonconformity, it may order the manufacturer, distributor, authorized dealer, or retailer to provide:</p>
<table>
<tr><th>Remedy</th><th>Content</th></tr>
<tr><td>Replacement</td><td>A similar or comparable vehicle in specifications and value, subject to availability. If the consumer chooses a more expensive vehicle from the same source, the consumer pays the price difference.</td></tr>
<tr><td>Return and refund</td><td>Return the defective vehicle and receive the purchase price plus collateral charges.</td></tr>
<tr><td>Transportation allowance or service vehicle</td><td>During repair and availment: a reasonable daily transportation allowance; an amount equal to air-conditioned taxi fare supported by official receipts; an amount agreed upon by the parties; or a service vehicle, at the option of the manufacturer, distributor, dealer, or retailer. The DTI resolves disagreements.</td></tr>
</table>
<p>A reasonable allowance for use is deducted in determining the value of the vehicle in both replacement and repurchase cases.</p>` },
      { title: "Price Act", content: `<h3>VII. The Price Act</h3>
<h4>Definitions</h4>
<ul>
<li><b>Basic necessities:</b> goods indispensable to the needs of consumers for sustenance and existence, such as food, medicines, and other essential household items.</li>
<li><b>Prime commodities:</b> goods not necessarily indispensable for basic subsistence but essential to consumers and the general public, including products that may substantially affect consumer welfare when their prices increase.</li>
<li><b>Price ceiling:</b> the legally enforceable maximum price at which a covered commodity may be sold. Once validly imposed, a seller may not charge more, even if the seller believes its acquisition cost or desired profit justifies a higher price.</li>
<li><b>Prevailing price:</b> generally the price immediately before the event or period triggering statutory price control. It is used to determine whether, and by how much, a seller has increased its price.</li>
</ul>
<h4>Prohibited Acts</h4>
<p><b>a. Profiteering:</b> the sale or offer for sale of a basic necessity or prime commodity at a price grossly in excess of its true worth.</p>
<p><i>Prima facie</i> evidence of profiteering when the product:</p>
<ol>
<li>Has no price tag;</li>
<li>Is misrepresented as to weight or measurement;</li>
<li>Is adulterated or diluted; or</li>
<li>Is sold at a price increased by <b>more than 10%</b> over its price in the immediately preceding month.</li>
</ol>
<p>The 10% rule does <b>not</b> apply to agricultural crops, fresh fish, fresh marine products, and other seasonal products covered by the law, as determined by the implementing agency.</p>
<blockquote><b>Note:</b> "Prima facie evidence" does not mean automatic final liability. It is sufficient, at the initial stage, to support a presumption or initial finding that profiteering may have occurred. The seller may still contest the finding and present evidence explaining the increase.</blockquote>
<blockquote><i>Universal Robina Corp. v. DTI</i> (2023): the 10% benchmark is an objective anchor for determining possible profiteering, although the determination remains inconclusive and may require further assessment.</blockquote>
<p><b>b. Cartelization:</b> a cartel is a combination or agreement between at least two persons or business enterprises involved in the production, manufacture, processing, storage, supply, distribution, marketing, sale, or disposition of a covered product, designed to artificially and unreasonably increase or manipulate its price. <i>Prima facie</i> evidence:</p>
<ul>
<li>Two or more competitors dealing in the same product perform uniform or complementary acts that tend to cause an artificial and unreasonable price increase; or</li>
<li>Competing businesses simultaneously and unreasonably increase prices in a manner that lessens competition.</li>
</ul>
<p><b>c. Hoarding:</b> accumulating or withholding a basic necessity or prime commodity beyond reasonable inventory requirements, especially when the purpose or effect is to create artificial scarcity or increase prices. A large inventory alone is not hoarding.</p>
<p><b>d. Refusal to sell or unjustified withholding:</b> refusing to sell, or deliberately withholding a covered commodity from the market, to take advantage of a shortage or emergency. Distinguish legitimate reasons:</p>
<ul>
<li>Lack of actual inventory;</li>
<li>Damaged or spoiled goods;</li>
<li>Reasonable allocation during a genuine shortage;</li>
<li>Safety concerns;</li>
<li>Lawful credit restrictions; or</li>
<li>A temporary store closure.</li>
</ul>
<p>The factual circumstances and the seller's records are critical.</p>
<p><b>e. Noncompliance with price-tag and labeling requirements:</b> retailers must display prices clearly and accurately. A missing or misleading price tag may expose the seller to regulatory action and may be <i>prima facie</i> evidence in a profiteering investigation.</p>` },
      { title: "Internet Transactions Act", content: `<h3>VIII. Internet Transactions Act of 2023 (R.A. 11967)</h3>
<p>Regulates business-to-consumer and other internet transactions. Applies to online merchants, e-retailers, e-marketplaces, digital platforms, and online consumers. It <b>complements</b>, not replaces, rights under the Consumer Act.</p>
<h4>A. Transactions Covered</h4>
<ul>
<li>Business-to-business (B2B) transactions;</li>
<li>Business-to-consumer (B2C) transactions;</li>
<li>Sales or leases of digital or non-digital goods and services over the internet; and</li>
<li>E-commerce activities within the mandate of the DTI.</li>
</ul>
<p>An <b>internet transaction</b> is the sale or lease of digital or non-digital goods and services over the internet.</p>
<h4>B. Transactions Excluded</h4>
<ol>
<li>Online media content; and</li>
<li>Consumer-to-consumer (C2C) transactions: transactions between end-users for personal, family, or household purposes and not in the ordinary course of business.</li>
</ol>
<h4>C. Definitions</h4>
<ul>
<li><b>Digital platform:</b> an ICT-enabled mechanism that connects and integrates producers and users in online environments where goods and services are requested, developed, and sold, and where data is generated and exchanged. Examples: e-marketplaces, mobile application platforms, online delivery platforms, social-media platforms, travel platforms.</li>
<li><b>E-marketplace:</b> a digital platform whose business is to connect online consumers with online merchants; facilitate shipment or logistics; provide post-purchase support; and retain oversight over the consummation of the transaction. <i>Example:</i> a platform that lets multiple merchants list products, accepts orders, processes payments, arranges delivery, and manages complaints.</li>
<li><b>E-retailer:</b> a natural or juridical person that sells goods or services directly to online consumers through its own website, webpage, or application.</li>
<li><b>Online consumer:</b> a natural or juridical person who purchases, leases, receives, or subscribes to goods or services over the internet for a fee.</li>
</ul>
<h4>D. Online Consumer Remedies</h4>
<p>In case of defect, malfunction, loss without the consumer's fault, failure to conform to a warranty, or other liability arising from the online contract, the consumer may pursue repair, replacement, refund, or other remedies under R.A. 7394 and other applicable laws.</p>
<p>If the consumer chooses replacement or refund, the merchant may require return of the original goods. The return must be made without cost to the consumer within a reasonable period, unless otherwise agreed.</p>
<h4>E. Obligations of Online Merchants and E-Retailers</h4>
<p>Goods must be:</p>
<ul>
<li>Of the same condition, type, quantity, and quality as described;</li>
<li>Consistent with the sample, image, or model shown;</li>
<li>Fit for the particular purpose communicated to and accepted by the merchant;</li>
<li>Delivered with advertised accessories and instructions;</li>
<li>Accompanied by relevant information in Filipino or English; and</li>
<li>Of the normal quality and performance expected of goods of the same type.</li>
</ul>
<p>For digital goods and services, also ensure appropriate functionality, compatibility, interoperability, accessibility, continuity, and security.</p>
<blockquote><b>Example:</b> An online seller displays a laptop with 16 GB RAM but delivers 8 GB. The consumer may demand remedies under the Internet Transactions Act and the Consumer Act because the goods do not conform to the online description.</blockquote>
<h4>F. Required Business Information</h4>
<p>An e-retailer must publish on its homepage: corporate or trade name; physical business address; mobile or landline number; valid email address; and professional registration details when the service involves a regulated profession. It must also issue paper or electronic receipts and maintain an accessible and efficient complaint mechanism.</p>
<h4>G. Data Privacy and Information Security</h4>
<p>E-retailers and online merchants must protect consumer data in accordance with the Data Privacy Act of 2012 and National Privacy Commission issuances.</p>
<blockquote><b>Example:</b> An online retailer collecting a customer's address and payment details must take reasonable precautions against unauthorized access, disclosure, or misuse.</blockquote>
<h4>H. E-Marketplaces and Digital Platforms</h4>
<p>E-marketplaces must help prevent unlawful sales and provide redress mechanisms. They must prohibit the sale of regulated goods unless the necessary permits and licensing information are available, and may be required to provide mechanisms for reporting unlawful listings or users.</p>
<h4>I. Primary Liability of Online Merchants</h4>
<p>The e-retailer or online merchant is <b>primarily liable</b> for indemnifying the online consumer in civil actions or administrative complaints arising from the internet transaction. The e-marketplace or digital platform may be treated as the same entity as the merchant if they are actually the same entity.</p>
<blockquote><b>Example:</b> A seller under a registered online store name delivers a counterfeit product. The seller is primarily responsible to the consumer. The marketplace's separate liability depends on the facts and the statutory obligations applicable to it.</blockquote>` },
      { title: "Comparison and Review", content: `<h3>IX. Consumer Act vs. Internet Transactions Act; Review</h3>
<table>
<tr><th>Topic</th><th>Consumer Act, R.A. 7394</th><th>Internet Transactions Act, R.A. 11967</th></tr>
<tr><td>Main focus</td><td>General consumer protection</td><td>Internet and digital transactions</td></tr>
<tr><td>Transactions covered</td><td>Sales, leases, services, credit, advertisements, and promotions</td><td>Online sales, digital goods, e-retailing, e-marketplaces, and digital platforms</td></tr>
<tr><td>Defective goods</td><td>Repair, replacement, refund, or price reduction under applicable provisions</td><td>Repair, replacement, refund, and other remedies under R.A. 7394 and other laws</td></tr>
<tr><td>Misrepresentation</td><td>Deceptive sales acts are prohibited</td><td>Online offers must conform to descriptions, images, samples, and specifications</td></tr>
<tr><td>Business information</td><td>Product and transaction disclosures</td><td>Online business name, address, contact details, and receipts</td></tr>
<tr><td>Data privacy</td><td>General consumer protection</td><td>Express online merchant obligation to protect consumer data</td></tr>
<tr><td>Regulatory structure</td><td>DTI and other sectoral agencies</td><td>DTI, including the E-Commerce Bureau, together with sectoral agencies</td></tr>
<tr><td>Liability</td><td>May extend to manufacturers, suppliers, distributors, and service providers</td><td>Primary liability rests on the online merchant or e-retailer, subject to statutory rules</td></tr>
</table>
<h4>Short-Answer Review Questions</h4>
<ol>
<li><b>What is a deceptive sales act?</b> A sales practice involving concealment, false representation, or fraudulent manipulation that induces a consumer to enter into a transaction.</li>
<li><b>When is a sales practice unconscionable?</b> When the seller takes advantage of the consumer's vulnerability and induces a transaction that is grossly inimical to the consumer or grossly one-sided in favor of the seller.</li>
<li><b>Principal remedies under Art. 100 after an imperfection is not corrected?</b> Replacement, refund with monetary updating, or proportionate price reduction.</li>
<li><b>Statutory correction period under Art. 100?</b> Thirty days, subject to a valid agreed period of not less than seven days and not more than 180 days.</li>
<li><b>Is the Lemon Law the consumer's exclusive remedy?</b> No. The consumer may also invoke the Consumer Act or another applicable law.</li>
<li><b>What must an online merchant ensure regarding delivered goods?</b> They must conform to the stated description, image, model, sample, quality, quantity, functionality, and accepted particular purpose.</li>
<li><b>Who is primarily liable in an online consumer complaint?</b> The online merchant or e-retailer, subject to statutory rules and defenses.</li>
<li><b>Must an online merchant provide business information?</b> Yes: business name, physical address, contact details, and professional registration information when applicable.</li>
<li><b>Can a seller charge for an unauthorized repair?</b> Generally, no, particularly when the additional work was not properly disclosed.</li>
<li><b>Role of the National Consumer Affairs Council?</b> It coordinates consumer-protection efforts, promotes consumer education and representation, and assists in consumer policy development.</li>
</ol>
<h4>Examination Checklist</h4>
<ol>
<li>Who is the consumer?</li>
<li>What is the transaction: sale, lease, service, credit, advertisement, promotion, or online transaction?</li>
<li>What representation was made?</li>
<li>Was it false, concealed, misleading, or fraudulent?</li>
<li>Was the consumer vulnerable or unable to protect his or her interests?</li>
<li>Was the product defective, hazardous, adulterated, or inconsistent with its description?</li>
<li>Was the defect corrected within the applicable period?</li>
<li>What remedy is available: repair, replacement, refund, rescission, price reduction, damages, or administrative relief?</li>
<li>Which agency has jurisdiction?</li>
<li>Is there a special law, such as the Lemon Law or Internet Transactions Act, that supplements the Consumer Act?</li>
</ol>` },
      { title: "Electronic Evidence", content: `<h3>X. Rules on Electronic Evidence</h3>
<h4>A. Purpose and Policy</h4>
<p>Information may be created, signed, stored, transmitted, and presented electronically. The Rules prevent the exclusion of evidence merely because it is digital rather than paper-based. They do <b>not</b> make every electronic file automatically admissible. The proponent must still establish:</p>
<ol>
<li>Relevance;</li>
<li>Compliance with the Rules of Court and other applicable laws;</li>
<li>Authenticity; and</li>
<li>Sufficient integrity and reliability.</li>
</ol>
<p>An electronic document is admissible only if it complies with the ordinary rules on admissibility and is authenticated in the manner prescribed by the Rules.</p>
<h4>B. Coverage</h4>
<p>The Rules apply whenever an electronic document or electronic data message is offered or used in evidence, unless another rule specifically provides otherwise.</p>
<h4>C. Important Limitation</h4>
<p>Electronic form does not dispense with formal legal requirements. The Electronic Commerce Act preserves requirements imposed by other laws regarding formalities necessary for the validity of a transaction. Electronic evidence may <i>prove</i> a transaction, but it does not necessarily cure the absence of a formality required by substantive law.</p>
<h4>D. Admissibility</h4>
<p><b>D.1 Electronic form is not a ground for exclusion.</b> An electronic document cannot be rejected solely because it is electronic or not in standard paper form. The Electronic Commerce Act provides that an electronic data message or electronic document should not be denied admissibility on that sole ground.</p>
<p><b>D.2 Basic admissibility requirements.</b> The proponent must still establish:</p>
<ol>
<li><b>Relevance:</b> the evidence tends to prove or disprove a fact in issue;</li>
<li><b>Competence:</b> it is not excluded by the Constitution, statute, or the Rules of Court;</li>
<li><b>Authenticity:</b> the document is what the proponent claims it to be;</li>
<li><b>Integrity:</b> the data has not been improperly altered; and</li>
<li><b>Reliability:</b> the method of creation, storage, transmission, or retrieval is sufficiently dependable.</li>
</ol>
<h4>E. Authentication Is Distinct from Admissibility</h4>
<p>Authentication is not the same as proving the ultimate truth of the contents. Authenticating an e-mail may establish that:</p>
<ul>
<li>It came from a particular account;</li>
<li>The account was controlled by a particular person;</li>
<li>It was transmitted at a particular time; and</li>
<li>It was not materially altered.</li>
</ul>
<p>Whether its statements are true is a separate issue governed by relevance, hearsay rules, personal knowledge, and other evidentiary principles.</p>
<h4>F. Burden of Proving Authenticity</h4>
<p>The person seeking to introduce an electronic document has the burden of proving its authenticity. The same rule applies to screenshots and social-media evidence. A screenshot is not self-authenticating merely because it appears on a computer or mobile phone screen; the proponent must show its authenticity and due execution.</p>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Retail Trade Laws & Consumer Act with e-Commerce Law.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra1992/ra_7394_1992.html" target="_blank" rel="noopener">Consumer Act (R.A. 7394)</a></td><td>Consumer protection</td></tr><tr><td><a href="https://lawphil.net/statutes/repacts/ra2000/ra_8792_2000.html" target="_blank" rel="noopener">E-Commerce Act (R.A. 8792)</a></td><td>Electronic documents and signatures</td></tr><tr><td><a href="https://www.dti.gov.ph/" target="_blank" rel="noopener">Department of Trade and Industry</a></td><td>Consumer and trade regulations</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  },
  {
    title: "Labor Law",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` },
      { title: "References & Laws", content: `<h3>References and Laws</h3><p>Primary sources and official references for Labor Law.</p><table><tr><th>Law / Reference</th><th>Note</th></tr><tr><td><a href="https://lawphil.net/statutes/presdecs/pd1974/pd_442_1974.html" target="_blank" rel="noopener">Labor Code (P.D. 442)</a></td><td>Renumbered Labor Code</td></tr><tr><td><a href="https://www.dole.gov.ph/" target="_blank" rel="noopener">Department of Labor and Employment</a></td><td>Orders, advisories, wage orders</td></tr><tr><td><a href="https://nlrc.dole.gov.ph/" target="_blank" rel="noopener">NLRC</a></td><td>Rules of procedure</td></tr><tr><td><a href="https://elibrary.judiciary.gov.ph/" target="_blank" rel="noopener">Supreme Court E-Library</a></td><td>Decisions, resolutions, rules</td></tr><tr><td><a href="https://lawphil.net/judjuris/judjuris.html" target="_blank" rel="noopener">Lawphil: Jurisprudence</a></td><td>Supreme Court decisions by year</td></tr><tr><td><a href="https://ldr.senate.gov.ph/" target="_blank" rel="noopener">Senate Legislative Digital Repository</a></td><td>Acts, Republic Acts, issuances</td></tr></table><p><i>Links open external sites in a new tab. Always cite the latest amended text.</i></p>` }
    ]
  }
];

/* ---------------- Code below needs no editing ---------------- */
let subject = 0, lesson = 0;
const $ = id => document.getElementById(id);

function closeMenu() {
  $("sidebar").classList.remove("open");
  $("navToggle").setAttribute("aria-expanded", "false");
}
$("navToggle").onclick = () => {
  const open = $("sidebar").classList.toggle("open");
  $("navToggle").setAttribute("aria-expanded", open);
};

function go(s, l) {
  closeMenu();
  subject = s; lesson = l;
  location.hash = "s" + s + "-l" + l;
  render();
}

function renderNav() {
  $("nav").innerHTML = "";
  SUBJECTS.forEach((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = s.title;
    if (i === subject) b.setAttribute("aria-current", "true");
    b.onclick = () => go(i, 0);
    $("nav").appendChild(b);
  });
}

function renderTabs() {
  const box = $("tabs");
  box.innerHTML = "";
  const lessons = SUBJECTS[subject].lessons;
  box.hidden = !lessons.length;
  lessons.forEach((l, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === lesson);
    b.tabIndex = i === lesson ? 0 : -1;
    b.textContent = l.title;
    b.onclick = () => go(subject, i);
    b.onkeydown = e => {
      const n = lessons.length;
      let to = null;
      if (e.key === "ArrowRight") to = (i + 1) % n;
      if (e.key === "ArrowLeft") to = (i - 1 + n) % n;
      if (to === null) return;
      e.preventDefault();
      go(subject, to);
      box.children[to].focus();
    };
    box.appendChild(b);
  });
  // keep the selected tab in view when tabs overflow (phones)
  const sel = box.children[lesson];
  if (sel) box.scrollLeft = sel.offsetLeft - (box.clientWidth - sel.offsetWidth) / 2;
}

function renderLesson() {
  const l = SUBJECTS[subject].lessons[lesson];
  $("lesson").innerHTML = l ? l.content : '<p class="empty">No lessons added yet.</p>';
}

function render() {
  const s = SUBJECTS[subject];
  $("title").textContent = s.title;
  $("sub").textContent = s.sub;
  $("sub").hidden = !s.sub;
  $("navCurrent").textContent = s.title;
  document.title = s.title + " | Law Reviewer Library";
  renderNav();
  renderTabs();
  renderLesson();
}

(function start() {
  const m = /^#s(\d+)(?:-l(\d+))?$/.exec(location.hash);
  if (m && SUBJECTS[+m[1]]) {
    subject = +m[1];
    if (m[2] && SUBJECTS[subject].lessons[+m[2]]) lesson = +m[2];
  }
  render();
})();

/* ---------------- Light / dark mode ---------------- */
(function theme() {
  const root = document.documentElement, btn = $("themeToggle"), icon = $("themeIcon");
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const isDark = () => {
    const t = root.getAttribute("data-theme");
    return t ? t === "dark" : mq.matches;
  };
  function sync() {
    const dark = isDark();
    icon.textContent = dark ? "\u2600" : "\u263E";
    const label = dark ? "Switch to light mode" : "Switch to dark mode";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  }
  btn.onclick = () => {
    const next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  };
  if (mq.addEventListener) mq.addEventListener("change", sync);
  sync();
})();