const getRights = (identifier, vocab) => {
  const defined_rights = {
    "rights_statements": [
      {
        "skos:prefLabel": "In Copyright",
        "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
        "scope_note": "This Rights Statement can be used for an Item that is in copyright. Using this statement implies that the organization making this Item available has determined that the Item is in copyright and either is the rights-holder, has obtained permission from the rights-holder(s) to make their Work(s) available, or makes the Item available under an exception or limitation to copyright (including Fair Use) that entitles it to make the Item available.",
        "identifier": "InC"
      },
      {
        "skos:prefLabel": "In Copyright - EU Orphan Work",
        "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        "definition": "This Item has been identified as an orphan work in the country of first publication and in line with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of orphan works.\n\n  For this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located even though a diligent search for the rights-holder(s) has been conducted. The results of the diligent search are available in the EU Orphan Works Database.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        "scope_note": "This Rights Statement is intended for use with Items for which the underlying Work has been identified as an Orphan Work in accordance with Directive 2012/28/EU of the European Parliament and of the Council of 25 October 2012 on certain permitted uses of Orphan Works. It can only be applied to Items derived from Works that are covered by the Directive: Works published in the form of books, journals, newspapers, magazines or other writings as well as cinematographic or audiovisual works and phonograms (note: this excludes photography and visual arts). It can only be applied by organizations that are beneficiaries of the Directive: publicly accessible libraries, educational establishments and museums, archives, film or audio heritage institutions and public-service broadcasting organizations, established in one of the EU member states. The beneficiary is also expected to have registered the work in the EU Orphan Works Database maintained by EUIPO.",
        "identifier": "InC-OW-EU"
      },
      {
        "skos:prefLabel": "In Copyright - Educational Use Permitted",
        "skos:note": "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for educational uses.\n\n  For other uses, you need to obtain permission from the rights-holder(s).",
        "scope_note": "This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for educational purposes without first obtaining permission.",
        "identifier": "InC-EDU"
      },
      {
        "skos:prefLabel": "In Copyright - Non-Commercial Use Permitted",
        "skos:note": "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
        "definition": "This Item is protected by copyright and/or related rights.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use. In addition, no permission is required from the rights-holder(s) for non-commercial uses.\n\n  For other uses you need to obtain permission from the rights-holder(s).",
        "scope_note": "This Rights Statement can be used only for copyrighted Items for which the organization making the Item available is the rights-holder or has been explicitly authorized by the rights-holder(s) to allow third parties to use their Work(s) for non-commercial purposes without obtaining permission first.",
        "identifier": "InC-NC"
      },
      {
        "skos:prefLabel": "In Copyright - Rights-holder(s) Unlocatable or Unidentifiable",
        "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        "definition": "This Item is protected by copyright and/or related rights. However, for this Item, either (a) no rights-holder(s) have been identified or (b) one or more rights-holder(s) have been identified but none have been located.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        "scope_note": "This Rights Statement is intended for use with an Item that has been identified as in copyright but for which no rights-holder(s) has been identified or located after some reasonable investigation. This Rights Statement should only be used if the organization that intends to make the Item available is reasonably sure that the underlying Work is in copyright. This Rights Statement is not intended for use by EU-based organizations who have identified works as Orphan Works in accordance with the EU Orphan Works Directive (they must use InC-OW-EU instead).",
        "identifier": "InC-RUU"
      },
      {
        "skos:prefLabel": "No Copyright - Contractual Restrictions",
        "skos:note": "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
        "definition": "Use of this Item is not restricted by copyright and/or related rights.\n\n  As part of the acquisition or digitization of this Work, the organization that has made the Item available is contractually required to limit the use of this Item. Limitations may include, but are not limited to, privacy issues, cultural protections, digitization agreements or donor agreements.\n\n  Please refer to the organization that has made the Item available for more information.",
        "scope_note": "This Rights Statement can only be used for Items that are in the Public Domain but for which the organization that intends to make the Item available has entered into contractual agreement that requires it to take steps to restrict third party uses of the Item. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the contractual restrictions that apply to the use of the Item.",
        "identifier": "NoC-CR"
      },
      {
        "skos:prefLabel": "No Copyright - Non-Commercial Use Only",
        "skos:note": "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        "definition": "This Work has been digitized in a public-private partnership. As part of this partnership, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties.\n\n  You can, without permission, copy, modify, distribute, display, or perform the Item, for non-commercial uses. For any other permissible uses, please review the terms and conditions of the organization that has made the Item available.",
        "scope_note": "This Rights Statement can only be used for Works that are in the Public Domain and have been digitized in a public-private partnership as part of which, the partners have agreed to limit commercial uses of this digital representation of the Work by third parties. It has been developed specifically to allow the inclusion of Works that have been digitized as part of the partnerships between European Libraries and Google, but can in theory be applied to Items that have been digitized in similar public-private partnerships.",
        "identifier": "NoC-NC"
      },
      {
        "skos:prefLabel": "No Copyright - Other Known Legal Restrictions",
        "skos:note": "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        "definition": "Use of this Item is not restricted by copyright and/or related rights.\n\n  In one or more jurisdictions, laws other than copyright are known to impose restrictions on the use of this Item.\n\n  Please refer to the organization that has made the Item available for more information.",
        "scope_note": "This Rights Statement should be used for Items that are in the Public Domain but that cannot be freely re-used as the consequence of known legal restrictions that prevent the organization that intends to make the Item available from allowing free re-use of the Item, such as cultural heritage or traditional cultural expression protections. In order for this Rights Statement to be conclusive, the organization that intends to make the Item available should provide a link to a page detailing the legal restrictions that limit re-use of the Item.",
        "identifier": "NoC-OKLR"
      },
      {
        "skos:prefLabel": "No Copyright - United States",
        "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        "definition": "The organization that has made the Item available believes that the Item is in the Public Domain under the laws of the United States, but a determination was not made as to its copyright status under the copyright laws of other countries. The Item may not be in the Public Domain under the laws of other countries.\n\n  Please refer to the organization that has made the Item available for more information.",
        "scope_note": "This Rights Statement should be used for Items for which the organization that intends to make the Item available has determined are free of copyright under the laws of the United States. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work.",
        "identifier": "NoC-US"
      },
      {
        "skos:prefLabel": "Copyright Not Evaluated",
        "skos:note": "You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material.",
        "definition": "The copyright and related rights status of this Item has not been evaluated.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        "scope_note": "This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that intends to make the Item available has not undertaken an effort to determine the copyright status of the underlying Work.",
        "identifier": "CNE"
      },
      {
        "skos:prefLabel": "Copyright Undetermined",
        "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use.",
        "definition": "The copyright and related rights status of this Item has been reviewed by the organization that has made the Item available, but the organization was unable to make a conclusive determination as to the copyright status of the Item.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        "scope_note": "This Rights Statement should be used for Items for which the copyright status is unknown and for which the organization that has made the Item available has undertaken an (unsuccessful) effort to determine the copyright status of the underlying Work. Typically, this Rights Statement is used when the organization is missing key facts essential to making an accurate copyright status determination.",
        "identifier": "UND"
      },
      {
        "skos:prefLabel": "No Known Copyright",
        "skos:note": "You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available.",
        "definition": "The organization that has made the Item available reasonably believes that the Item is not restricted by copyright or related rights, but a conclusive determination could not be made.\n\n  Please refer to the organization that has made the Item available for more information.\n\n  You are free to use this Item in any way that is permitted by the copyright and related rights legislation that applies to your use.",
        "scope_note": "This Rights Statement should be used for Items for which the copyright status has not been determined conclusively, but for which the organization that intends to make the Item available has reasonable cause to believe that the underlying Work is not covered by copyright or related rights anymore. This Rights Statement should not be used for Orphan Works (which are assumed to be in-copyright) or for Items where the organization that intends to make the Item available has not undertaken an effort to ascertain the copyright status of the underlying Work.",
        "identifier": "NKC"
      }
    ],
    "creative_commons": [
      {
        "title": [
          "Attribution 4.0 International"
        ],
        "identifier": "by"
      },
      {
        "title": [
          "Attribution-ShareAlike 4.0 International"
        ],
        "identifier": "by-sa"
      },
      {
        "title": [
          "Attribution-NoDerivatives 4.0 International"
        ],
        "identifier": "by-nd"
      },
      {
        "title": [
          "Attribution-NonCommercial 4.0 International"
        ],
        "identifier": "by-nc"
      },
      {
        "title": [
          "Attribution-NonCommercial-ShareAlike 4.0 International"
        ],
        "identifier": "by-nc-sa"
      },
      {
        "title": [
          "Attribution-NonCommercial-NoDerivatives 4.0 International"
        ],
        "identifier": "by-nc-nd"
      },
      {
        "title": [
          "Public Domain Mark 1.0"
        ],
        "identifier": "mark"
      }
    ]
  }

  const rights_statements = defined_rights[vocab].filter(statement => statement.identifier === identifier)

  return rights_statements[0]
}

export default getRights
