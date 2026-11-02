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
<blockquote>Restrictive indorser (Sec. 36): still liable to his immediate indorsee like an unqualified indorser unless he states otherwise. A later taker is only an ordinary assignee if further negotiation is barred.</blockquote>` }
    ]
  },
  {
    title: "Criminal Law",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` }
    ]
  },
  {
    title: "Income Taxation",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` }
    ]
  },
  {
    title: "Law on Business Protection",
    sub: "Intellectual Property",
    lessons: [
      { title: "Copyright Basics", content: `<h3>I. Copyright: Concept, Nature, Key Terms</h3>
<p><b>Copyright</b> protects <i>original intellectual creations in the literary and artistic domain</i> from the moment of creation (Sec. 172.1, R.A. 8293, the IP Code). Protection arises by the <b>sole fact of creation</b>, regardless of mode or form of expression, content, quality, or purpose (Sec. 172.2). <b>Registration is not required.</b></p>
<table>
<tr><th>Key term</th><th>Meaning</th></tr>
<tr><td>Author (Sec. 171.1)</td><td>The <i>natural person</i> who created the work</td></tr>
<tr><td>Communication to the public (Sec. 171.3)</td><td>Making a work available so the public can access it from a place and time individually chosen by them</td></tr>
<tr><td>Reproduction (Sec. 171.9)</td><td>Making one or more copies of a work or sound recording in any manner or form</td></tr>
</table>
<h4>Nature of Copyright</h4>
<ul>
<li>An intellectual property right; <b>proprietary</b> in nature (exclusive economic rights, Sec. 177).</li>
<li><b>Automatic</b> protection (Sec. 172.2).</li>
<li>Protects the <b>expression</b>, not the idea, concept, procedure, or method (Sec. 175).</li>
<li>Term: life of the author + 50 years (Sec. 213).</li>
</ul>
<h4>Copyright, Trademark, and Patent Are Distinct</h4>
<p><b>Kho v. Court of Appeals</b> (G.R. No. 115758, March 19, 2002)</p>
<ul>
<li><b>Facts:</b> Elidad Kho (KEC Cosmetics Laboratory) sold cosmetics under "Chin Chun Su." She claimed patent rights over the product and copyright over the name and the oval facial-cream container. Summerville General Merchandising used similar containers. The RTC granted a preliminary injunction.</li>
<li><b>Issue:</b> Did her copyright and patent registrations give her the exclusive right to the name and container?</li>
<li><b>Held:</b> <b>No.</b> The name and container were matters of <b>trademark</b>, which Kho failed to establish. Without a clear right, no preliminary injunction.</li>
<li><b>Doctrine:</b> Copyright, trademark, and patent are separate IP rights and cannot be interchanged. Copyright or patent ownership is not automatic trademark right. A preliminary injunction requires a <b>clear right</b> that is violated or threatened.</li>
</ul>` },
      { title: "Protected Works", content: `<h3>II. Works Protected</h3>
<h4>Original Works (Sec. 172.1)</h4>
<ul>
<li>Books, pamphlets, articles; periodicals and newspapers</li>
<li>Lectures, sermons, addresses, dissertations prepared for oral delivery; letters</li>
<li>Dramatic or dramatico-musical works, choreography; musical compositions</li>
<li>Drawing, painting, architecture, sculpture, engraving, lithography; original ornamental designs and applied art</li>
<li>Illustrations, maps, plans, sketches, charts, 3-D works (geography, topography, architecture, science); scientific or technical drawings</li>
<li>Photographic works; audiovisual and cinematographic works; pictorial illustrations and advertisements</li>
<li><b>Computer programs</b>; other literary, scholarly, scientific, and artistic works</li>
</ul>
<h4>Derivative Works (Sec. 173)</h4>
<p>Protected as <b>new works</b>:</p>
<ul>
<li><b>(a)</b> Dramatizations, translations, adaptations, abridgments, arrangements, and other alterations of literary or artistic works.</li>
<li><b>(b)</b> Collections of literary, scholarly, or artistic works, and compilations of data and other materials that are original by reason of the <b>selection, coordination, or arrangement</b> of their contents.</li>
</ul>
<blockquote><b>Sec. 173.2 proviso:</b> the new work does <b>not</b> affect any subsisting copyright in the original, does not imply any right to use the original, and does not secure or extend copyright in the original (Sec. 8, P.D. 49; Art. 10, TRIPS). Example: the Harry Potter novels and the films.</blockquote>
<table>
<tr><th>Original work (Sec. 172)</th><th>Derivative work (Sec. 173)</th></tr>
<tr><td>Independently created; derives from the author's own expression</td><td>Formulated from a protected work; depends on a pre-existing creation</td></tr>
<tr><td>Full copyright protection</td><td>Separate protection only for the <b>original aspects</b> it adds</td></tr>
<tr><td>Author reserves exclusive rights</td><td>Exclusive right in the underlying work stays with the original owner</td></tr>
</table>
<h4>Republic (through the PNP) v. Tupaz</h4>
<p>G.R. No. 197335, September 7, 2020</p>
<ul>
<li><b>Facts:</b> In 1996 the PNP updated its cap devices and badges (native shield, Lapu-Lapu, eight sun rays, three stars, laurel leaves, "service, honor, and justice"). It collaborated with Jose Tupaz IV, who produced the designs and prototypes. In the bidding, El Oro Industries (Tupaz was president) came second but presented <b>copyright registration certificates</b> for the new designs and won the contract. The PNP challenged the registrations, claiming the designs were <b>works of the Philippine Government</b>.</li>
<li><b>RTC:</b> For the Republic. Applied Sec. 176.1, R.A. 8293; cancelled the registrations and issued a writ of prohibitory injunction. <b>CA:</b> For Tupaz. Applied Secs. 2 and 8, P.D. 49; lifted both orders.</li>
<li><b>SC (affirmed the CA):</b>
<ol>
<li><b>P.D. 49 governs</b>, not R.A. 8293, since it was in force when the designs were made and registered (1996).</li>
<li>The designs are <b>alterations of artistic works</b> (Sec. 2[P], P.D. 49). They are copyrightable as derivative works only if (i) made <b>with the consent</b> of the creator of the pre-existing designs and (ii) there is a <b>"distinguishable non-trivial variation"</b>. Both were present.</li>
<li>The PNP is <b>not an author</b>. An author transforms an abstract idea into a tangible expression through skill or labor. The PNP only supplied ideas and concepts; Tupaz used his skill and labor to concretize them.</li>
</ol></li>
<li><b>Doctrine:</b> Copyright in a derivative work belongs to the person who fixes an idea into a tangible medium. One who merely contributes ideas is not an author.</li>
</ul>
<h4>Publisher's Right (Sec. 174)</h4>
<p>In addition to the author's grant, the publisher has a copyright consisting <b>merely of the right to reproduce the typographical arrangement</b> of the published edition (layout and formatting). It is <b>separate from</b> the copyright in the literary content.</p>
<h4>Threshold: The Work Must Be Copyrightable Subject Matter</h4>
<p><b>Ching v. Salinas</b> (G.R. No. 161295, June 29, 2005)</p>
<ul>
<li><b>Facts:</b> Jessie Ching registered a "Leaf Spring Eye Bushing for Vehicle Suspension" and a "Vehicle Bearing Cushion" (utility models) with the National Library and sued Salinas et al.</li>
<li><b>Issues:</b> (1) Are the models copyrightable? (2) Is he the owner of a copyright over them?</li>
<li><b>Held:</b> <b>No</b> to both. Utility models are not literary or artistic works under Sec. 172. Registration with the National Library does not create copyright; the work must first be copyrightable subject matter. (See the registration rule in <i>Registration and Deposit</i>.)</li>
</ul>` },
      { title: "Unprotected Matter", content: `<h3>III. What Copyright Does Not Protect (Sec. 175)</h3>
<p>Notwithstanding Secs. 172 and 173, <b>no protection</b> extends to:</p>
<table>
<tr><th>Excluded</th><th>Examples</th></tr>
<tr><td><b>Ideas, concepts, systems:</b> any idea, procedure, system, method or operation, concept, principle, discovery, or mere data, <i>even if expressed, explained, illustrated, or embodied in a work</i></td><td>A novel's plot idea; a game-show format</td></tr>
<tr><td><b>News and facts:</b> news of the day and miscellaneous facts that are mere items of press information</td><td>The fact that an event happened</td></tr>
<tr><td><b>Official texts:</b> legislative, administrative, or legal texts and their official translations</td><td>Statutes, rules, regulations (see <i>Works of the Government</i>)</td></tr>
</table>
<h4>The Idea-Expression Dichotomy</h4>
<p>Copyright protects the <i>specific way</i> an idea is presented (the expression), never the idea itself. The law draws a sharp line between <b>substance</b> (idea) and <b>form</b> (expression). Facts are <i>found, not created</i>, so no one owns them. What is protected is the journalist's own words, tone, and structure.</p>
<h4>Cases</h4>
<p><b>Joaquin v. Drilon</b> (G.R. No. 108946, January 28, 1999, Mendoza, J.)</p>
<ul>
<li>Copyright does <b>not</b> extend to the general concept or format of a dating game show. Given the nature of the subject, the prosecutor should have compared the videotapes of the two shows.</li>
<li><b>Doctrine:</b> no copyright in an idea, procedure, process, system, method of operation, concept, principle, or discovery, however described or embodied.</li>
</ul>
<p><b>ABS-CBN v. Gozon</b> (G.R. No. 195956, March 11, 2015, Leonen, J.)</p>
<ul>
<li><b>Doctrine:</b> news or an event itself is <b>not</b> copyrightable, but its <b>expression through audiovisual footage may be</b>. <b>Copyrightability is distinct from fair use.</b> Even copyrightable footage may be used without infringement only when the use qualifies as fair use, decided case by case under the statutory factors.</li>
</ul>
<blockquote>Authorship by idea-contributors: see <i>Republic v. Tupaz</i> under <i>Protected Works</i>.</blockquote>` },
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
      { title: "Case Index and Self-Test", content: `<h3>XIV. Case Index</h3>
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
</table>
<h3>XV. Self-Test</h3>
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
</ol>` }
    ]
  },
  {
    title: "Philippine Constitution and Government",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` }
    ]
  },
  {
    title: "Law on Retail Trade",
    sub: "Consumer Act and E-Commerce",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` }
    ]
  },
  {
    title: "Labor Law",
    sub: "",
    lessons: [
      { title: "Lesson 1", content: `<h3>Lesson 1</h3><p>Content coming soon.</p>` },
      { title: "Lesson 2", content: `<h3>Lesson 2</h3><p>Content coming soon.</p>` }
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