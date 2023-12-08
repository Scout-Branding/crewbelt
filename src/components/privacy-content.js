import * as React from "react";
import tw, {styled} from "twin.macro"

const PrivacyContentStyle = styled.div`
  ${tw`my-16 mx-auto max-w-[1000px]`}
  strong {
    ${tw`font-bold`}
  }

  > * + * {
    ${tw`mt-4`}
  }

  p,
  ul,
  ol {
    ${tw`text-justify max-w-[900px] mx-auto`}
    + h2 {
      ${tw`mt-10`}
    }
  }

  div {
    ${tw`overflow-hidden w-full overflow-x-auto`}
    
    + p,
    + ul,
    + ol {
      ${tw`mt-10`}
    }
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
  }

  ol,
  ul {
    ${tw`pl-10`}
    li + li {
      ${tw`mt-1.5`}
    }

    > ul {
      ${tw`my-1.5 list-[circle]`}
    }
  }

  h2 {
    ${tw`text-center font-bold underline`}
    + h2 {
      ${tw`mt-4`}
    }
  }

  table {
    ${tw`border-r border-black mt-8 w-[1000px]`}
    &:last-of-type {
      ${tw`border-b border-black`}
    }

    + table {
      ${tw`mt-0`}
    }

    tr {
      ${tw`border-t border-black`}
    }

    th,
    td {
      ${tw`py-[6px] px-[15px] border-l border-black`}
    }

    th {
      ${tw`font-bold`}
    }

    td {
      ${tw`align-top`}
      ul {
        ${tw`pl-4 text-left`}
      }
    }
  }
`

const PrivacyContent = () => {
  return (
    <PrivacyContentStyle>
      <p><strong>Effective Date: 2021 SEP 03</strong></p>

      <p><strong>Last Revised on: 2021 SEP 03</strong></p>

      <p><strong>Last Reviewed on: 2021 SEP 03</strong></p>

      <p>CrewBelt, LLC, (“we,” “our,” or “CrewBelt”), respects your privacy and is committed to providing a
        transparent notice of our Privacy Notice and Disclosure. This Privacy Notice and Disclosure applies solely
        to consumers (“consumers” or “you”).</p>

      <p>The purpose of this privacy notice and disclosure is to inform you, at or before the time we collect your
        personal information, how we use your personal information and what your rights are with respect to the
        personal information we collect:</p>

      <ul>
        <li>Your “Right to Know” about personal information collected, used, and disclosed including:</li>
        <ul>
          <li>What categories of personal information we collect from you and the purpose for its collection,</li>
          <li>How we use those categories of personal information,</li>
          <li>How we share the personal information you entrust to us</li>
        </ul>
        <li>Transparency about personal information that we sell, and your right to opt-out of the sale of your
          personal information
        </li>
        <li>Your “Right to Delete” personal information</li>
        <li>How to submit a verified consumer request for your Right to Know or Right to Delete</li>
        <li>How to use an authorized agent to submit a verified consumer request</li>
        <li>Your “Right to Non-Discrimination” for the exercise of a privacy right</li>
        <li>Other California privacy rights</li>
        <li>Changes to our privacy notice</li>
        <li>Our contact information</li>
      </ul>

      <h2>Privacy Notice and Disclosure for California Residents</h2>
      <h2>Your Right to Know</h2>

      <p>You have the right to request that CrewBelt disclose what personal information it collects, uses,
        discloses, and sells. You can do this through a verified consumer request. That process is described below
        in the section, “Submitting a Verified Consumer Request.”</p>
      <p>We collect personal information, which means information that identifies, relates to, describes, is capable
        of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer
        or household (“personal information”). The following table includes disclosures of the personal information
        we collect from consumers and the purposes for which it is collected and used, as well as lists of
        categories of consumers’ personal information we have collected about consumers in the past 12 months, the
        categories of sources from which it was collected and categories of third parties with whom we share the
        personal information.</p>

      <div>
        {/* A */}
        <table>
          <thead>
          <tr>
            <th colSpan="3">What personal information do we collect, use and share?</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☒</td>
            <td rowSpan="2" width="70%">
              <strong>A. Identifiers:</strong> For example, a real name, alias, postal address, unique personal
              identifier, online identifier, Internet Protocol address, email address, account name, telephone
              number, or other similar identifiers
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☒</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <ul>
                <li>To fulfill or meet the reason for which the information is provided</li>
                <li>For our internal operation purposes</li>
                <li>For auditing relating to consumer transactions including ad impressions and compliance with
                  regulations
                </li>
                <li>Fraud and security detection</li>
                <li>Debugging to identify and repair errors</li>
                <li>Short-term data use for the current interaction that is not used to build a profile</li>
                <li>Servicing transactions and accounts (e.g., customer service, maintaining and servicing
                  accounts, customer verification, payment processing) and providing services on behalf of business
                  or service provider (e.g., financing, advertising or marketing, analytics)
                </li>
                <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets, whether as a going concern or as part of a
                  bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among
                  the assets transferred.
                </li>
                <li>Undertaking internal research for technological development and demonstration</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Information from you that you actively provide: We collect this information from sources
                  including from the CrewBelt app (the “App”), online forms, e-mail, and via telephone.
                </li>
                <li>Information from you that you provide passively from your use of your sites and services: We
                  collect this information from sources including from a web browser, e-mail, app, or smartphone.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Cloud storage providers</li>
                <li>Payment processors</li>
                <li>Web analytics providers</li>
                <li>Web hosting service providers</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* B */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☒</td>
            <td rowSpan="2" width="70%">
              <strong>B. Personal Information Categories from Cal. Civ. Code § 1798.80(e): </strong>
              For example, a name, physical characteristics or description, address, telephone number, education,
              employment, employment history, or professional-certification number.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☒</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <ul>
                <li>To fulfill or meet the reason for which the information is provided</li>
                <li>For our internal operation purposes</li>
                <li>For auditing relating to consumer transactions including ad impressions and compliance with
                  regulations
                </li>
                <li>Fraud and security detection</li>
                <li>Debugging to identify and repair errors</li>
                <li>Short-term data use for the current interaction that is not used to build a profile</li>
                <li>Servicing transactions and accounts (e.g., customer service, maintaining and servicing
                  accounts, customer verification, payment processing) and providing services on behalf of business
                  or service provider (e.g., financing, advertising or marketing, analytics)
                </li>
                <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets, whether as a going concern or as part of a
                  bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among
                  the assets transferred.
                </li>
                <li>Undertaking internal research for technological development and demonstration</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Information from you that you actively provide: We collect this information from sources
                  including from the App, online forms, e-mail, and via telephone.
                </li>
                <li>Information from you that you provide passively from your use of your sites and services: We
                  collect this information from sources including from a web browser, e-mail, app, or smartphone.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Cloud storage providers</li>
                <li>Payment processors</li>
                <li>Web analytics providers</li>
                <li>Web hosting service providers</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* C */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>C. Characteristics of CA or Federal Protected Classifications: </strong>
              For example, race, religion, national origin), age (40 and over), gender, sexual orientation, medical
              condition, ancestry, pregnancy (includes childbirth, breastfeeding and/or related medical conditions),
              familial status, disability, veteran status, or genetic information.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* D */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>D. Commercial Information: </strong>
              For example, records of personal property, products or services purchased, obtained, or considered, or
              other purchasing or consuming histories or tendencies.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* E */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>E. Biometric Information.</strong>
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* F */}
        <table>
          <thead>
          <tr>
            <th colSpan="3">What personal information do we collect, use and share?</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☒</td>
            <td rowSpan="2" width="70%">
              <strong>F. Internet or Other Similar Network Activity: </strong>
              For example, browsing history, search history, and information regarding a consumer’s interaction with
              an Internet Web site, application, or advertisement
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☒</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <ul>
                <li>To fulfill or meet the reason for which the information is provided</li>
                <li>For our internal operation purposes</li>
                <li>For auditing relating to consumer transactions including ad impressions and compliance with
                  regulations
                </li>
                <li>Fraud and security detection</li>
                <li>Debugging to identify and repair errors</li>
                <li>Short-term data use for the current interaction that is not used to build a profile</li>
                <li>Servicing transactions and accounts (e.g., customer service, maintaining and servicing
                  accounts, customer verification, payment processing) and providing services on behalf of business
                  or service provider (e.g., financing, advertising or marketing, analytics)
                </li>
                <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets, whether as a going concern or as part of a
                  bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among
                  the assets transferred.
                </li>
                <li>Undertaking internal research for technological development and demonstration</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Information from you that you actively provide: We collect this information from sources
                  including from the App, online forms, e-mail, and via telephone.
                </li>
                <li>Information from you that you provide passively from your use of your sites and services: We
                  collect this information from sources including from a web browser, e-mail, app, or smartphone.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Cloud storage providers</li>
                <li>Payment processors</li>
                <li>Web analytics providers</li>
                <li>Web hosting service providers</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* G */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>G. Geolocation Data: </strong>
              For example, information that can be used to determine a device’s physical location
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* H */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>H. Sensory or Surveillance Data.</strong>
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* I */}
        <table>
          <thead>
          <tr>
            <th colSpan="3">What personal information do we collect, use and share?</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☒</td>
            <td rowSpan="2" width="70%">
              <strong>I. Professional or Employment-Related Information: </strong>
              For example, compensation, evaluations, performance reviews, personnel files and current and past job
              history.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☒</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <ul>
                <li>To fulfill or meet the reason for which the information is provided</li>
                <li>For our internal operation purposes</li>
                <li>For auditing relating to consumer transactions including ad impressions and compliance with
                  regulations
                </li>
                <li>Fraud and security detection</li>
                <li>Debugging to identify and repair errors</li>
                <li>Short-term data use for the current interaction that is not used to build a profile</li>
                <li>Servicing transactions and accounts (e.g., customer service, maintaining and servicing
                  accounts, customer verification, payment processing) and providing services on behalf of business
                  or service provider (e.g., financing, advertising or marketing, analytics)
                </li>
                <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets, whether as a going concern or as part of a
                  bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among
                  the assets transferred.
                </li>
                <li>Undertaking internal research for technological development and demonstration</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Information from you that you actively provide: We collect this information from sources
                  including from the App, online forms, e-mail, and via telephone.
                </li>
                <li>Information from you that you provide passively from your use of your sites and services: We
                  collect this information from sources including from a web browser, e-mail, app, or smartphone.
                </li>
                <li>
                  Third Parties (information we collect about you from third party sources): We collect this from
                  sources such as employers and general contractors.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Cloud storage providers</li>
                <li>Web analytics providers</li>
                <li>Web hosting service providers</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* J */}
        <table>
          <thead>
          <tr>
            <th colSpan="3">What personal information do we collect, use and share?</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☒</td>
            <td rowSpan="2" width="70%">
              <strong>J. Education Information: </strong>
              For example, major field of study, grade level, dates of attendance, participation in officially
              recognized activities and sports, degrees, honors, awards, and the most recent educational agency or
              institution attended.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☒</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>
              <ul>
                <li>To fulfill or meet the reason for which the information is provided</li>
                <li>For our internal operation purposes</li>
                <li>For auditing relating to consumer transactions including ad impressions and compliance with
                  regulations
                </li>
                <li>Fraud and security detection</li>
                <li>Debugging to identify and repair errors</li>
                <li>Short-term data use for the current interaction that is not used to build a profile</li>
                <li>Servicing transactions and accounts (e.g., customer service, maintaining and servicing
                  accounts, customer verification, payment processing) and providing services on behalf of business
                  or service provider (e.g., financing, advertising or marketing, analytics)
                </li>
                <li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of our assets, whether as a going concern or as part of a
                  bankruptcy, liquidation, or similar proceeding, in which personal information held by us is among
                  the assets transferred.
                </li>
                <li>Undertaking internal research for technological development and demonstration</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Information from you that you actively provide: We collect this information from sources
                  including from the App, online forms, e-mail, and via telephone.
                </li>
                <li>Information from you that you provide passively from your use of your sites and services: We
                  collect this information from sources including from a web browser, e-mail, app, or smartphone.
                </li>
                <li>
                  Third Parties (information we collect about you from third party sources): We collect this from
                  sources such as employers and general contractors.
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Cloud storage providers</li>
                <li>Web analytics providers</li>
                <li>Web hosting service providers</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
        {/* K */}
        <table>
          <tbody>
          <tr>
            <th>We Collect/Use</th>
            <td>☐</td>
            <td rowSpan="2" width="70%">
              <strong>K. Profile Data: </strong>
              For example, inferences drawn from personal information to create a profile about a consumer
              reflecting the consumer’s preferences, characteristics, psychological trends, predispositions,
              behavior, attitudes, intelligence, abilities, and aptitudes.
            </td>
          </tr>
          <tr>
            <th>We Have Collected/Used in the Past 12 Months</th>
            <td>☐</td>
          </tr>
          </tbody>
        </table>
        <table>
          <thead>
          <tr>
            <th align="left" width="35%">
              This category of personal information is collected and used for the following purposes:
            </th>
            <th width="30%">
              What are the categories of sources from which the personal information was collected?
            </th>
            <th width="35%">
              This category of personal information has been disclosed in the preceding 12 months to the following
              third parties for a business purpose:
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>None</li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <p><i><strong>Please note that Personal Information does not include:</strong></i></p>
      <ul>
        <li>Publicly available information from government records.</li>
        <li>Deidentified or aggregated consumer information.</li>
        <li>Information excluded from the CCPA's scope, like:</li>
        <ul>
          <li>o health or medical information covered by the Health Insurance Portability and Accountability Act of
            1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial
            data;
          </li>
          <li>o personal information covered by certain sector-specific privacy laws, including the Fair Credit
            Reporting Act (FCRA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act
            (CalFIPA), and the Driver's Privacy Protection Act of 1994.
          </li>
        </ul>
      </ul>
      <p>We will not collect additional categories of personal information or use the personal information for any
        other undisclosed purpose without providing you advance notice.</p>

      <h2>What We Sell and Right to Opt-Out</h2>
      <p>CrewBelt does not sell your personal information without affirmative authorization. If you are a California
        resident, you have the right to direct CrewBelt to stop selling your personal information, and to refrain
        from doing so in the future, which is called the “Right to Opt-Out.”</p>
      <p><strong>You may exercise your Right to Opt-Out by clicking “Do Not Sell My Personal Information” by
        submitting a request to support@crewbelt.com</strong></p>
      <p><strong>Authorized Agent for Opt-Out: </strong>If you use an authorized agent to exercise your right to
        opt-out of the sale
        of personal information, please note that CrewBelt requires that the authorized agent submit proof in the
        form of a written authorization from you that they have been authorized to act on your behalf. </p>
      <p>Once you make an opt-out request, we will wait at least twelve (12) months before asking you to reauthorize
        personal information sales.</p>

      <h2>Your Right to Request Deletion of Your Personal Information</h2>
      <p>You have the right to request that CrewBelt delete any of your personal information collected or maintained
        by CrewBelt, subject to certain exceptions. You can do this through a verified consumer request. That
        process is described below in the section, “Submitting a Verified Consumer Request.” </p>
      <p>We may deny your deletion request if retaining the information is necessary for us or our service
        provider(s) to:</p>
      <ul>
        <li>Complete the transaction for which we collected the personal information, provide a good or service
          that you requested, take actions reasonably anticipated within the context of our ongoing business
          relationship with you, or otherwise perform our contract with you.
        </li>
        <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or
          prosecute those responsible for such activities.
        </li>
        <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
        <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or
          exercise another right provided for by law.
        </li>
        <li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
        <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your
          relationship with us.
        </li>
        <li>Comply with a legal obligation.</li>
        <li>Make other internal and lawful uses of that information that are compatible with the context in which
          you provided it.
        </li>
      </ul>

      <h2>Submitting a Verified Consumer Request</h2>
      <p>You have the right to submit verified consumer requests to know information or for deletion. The request to
        know can be for any or all of the following about you: </p>
      <ol>
        <li>Specific pieces of personal information that CrewBelt has;</li>
        <li>Categories of personal information CrewBelt has collected;</li>
        <li>Categories of sources from which the personal information is collected;</li>
        <li>Categories of personal information that CrewBelt sold or disclosed for a business purpose;</li>
        <li>Categories of third parties to whom the personal information was sold or disclosed for a business
          purpose; and
        </li>
        <li>The business or commercial purpose for collecting or selling personal information.</li>
      </ol>
      <p>The request to delete is to delete any of your personal information collected or maintained by CrewBelt,
        subject to certain exceptions.</p>
      <p>You may only make a verifiable consumer request to know information twice within a 12-month period. We
        cannot respond to your request or provide you with personal information if we cannot verify your identity or
        authority to make the request and confirm that the personal information relates to you. We will only use
        personal information provided in a verifiable consumer request to verify the requestor’s identity or
        authority to make the request.</p>
      <p>You can submit requests by emailing us at support@crewbelt.com or by calling 205.323.8500. Your request
        will be verified using information you provide. If you call 205.323.8500, you will be asked to provide the
        same information requested via email for verification purposes. </p>
      <p>Once we receive your verifiable consumer request, we will send you an acknowledgement letter within 10 days
        which will describe our verification process. We will respond to your request within 45 days, if we are able
        to verify your identity. Requests for deletion will require a separate confirmation that you want your
        information deleted.</p>
      <p>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive,
        repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why
        we made that decision and provide you with a cost estimate before completing your request.</p>
      <p><strong>Please note that, in responding to our request, we are not permitted to disclose or provide you
        with your Social Security Number, Driver’s License Number, or other government issued identification number,
        financial account number, any health insurance or medical identification number, an account password, or
        security questions and answers.</strong></p>

      <h2>Using an Authorized Agent to Submit a Request</h2>
      <p>Only you, a person registered with the California Secretary of State, or a person you authorize to act on
        your behalf, may make a verifiable consumer request related to your personal information. You may also make
        a verifiable consumer request on behalf of your minor child. If you use an authorized agent, you may provide
        a power of attorney executed pursuant to California Probate Code sections 4000 to 4465. If a power of
        attorney that meets those provisions is not submitted, you will be required to verify your identity directly
        by submitting a verified consumer request according to the procedures in the section “Submitting a Verified
        Consumer Request.” If anyone purporting to be an authorized agent for a consumer contacts us, we will
        require proof that the authorized agent has been authorized to act on the consumer’s behalf. </p>

      <h2>Your Right to Non-Discrimination for the Exercise of a Privacy Right</h2>
      <p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA,
        we will not:</p>
      <ul>
        <li>Deny you goods or services.</li>
        <li>Charge you different prices or rates for goods or services, including through granting discounts or
          other benefits, or imposing penalties.
        </li>
        <li>Provide you a different level or quality of goods or services.</li>
        <li>Suggest that you may receive a different price or rate for goods or services or a different level or
          quality of goods or services.
        </li>
      </ul>
      <p>However, we may offer you certain financial incentives permitted by the CCPA that can result in different
        prices, rates, or quality levels. We currently do not offer any such financial incentives.</p>

      <h2>Changes to Our Privacy Notice</h2>
      <p>CrewBelt reserves the right to amend this privacy notice at our discretion and at any time. When we make
        changes to this privacy notice, we will post the updated notice on the website and update the notice’s
        effective date. </p>

      <h2>Contact for More Information</h2>
      <p>If you have any questions or comments about this notice, the ways in which CrewBelt collects and uses our
        information, your choices and rights regarding such use, or wish to exercise your rights under California
        law, please do not hesitate to contact us at:</p>
      <p>Phone: 205.323.8500</p>
      <p>Email: support@crewbelt.com</p>
      <p>
        Postal Address: CrewBelt, LLC, 2830 Commerce Blvd., Irondale, AL 35210<br/>
        Attn: Privacy
      </p>
    </PrivacyContentStyle>
  )
}
export default PrivacyContent
