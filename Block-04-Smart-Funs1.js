[{
    "_id": "_fn$required",
    "name": "required",
    "params": ["predicate"],
    "code": "(boolean (get (s) predicate))",
    "doc": "This predicate is required. Add to collection spec"
},
{
    "_id": "_fn$new?",
    "name": "new?",
    "code": "(nil? (?pO))",
    "doc": "Checks whether previous value was nil."
},
{
    "_id": "_fn$authOrganizationType",
    "name": "authOrganizationType", 
    "code": "(query (str \"{\\\"select\\\": [{\\\"organization/_auth\\\": [{\\\"organization/type\\\": [\\\"_tag/id\\\"]}]}],\\n \\\"from\\\": \" (?auth_id) \"}\"))"
},
{
    "_id": "_fn$organizationType",
    "name": "organizationType", 
    "code": "(query (str \"{\\\"select\\\": [{\\\"organization/type\\\": [\\\"_tag/id\\\"]}],\\n \\\"from\\\": \" (?o) \"}\"))"
},
{
    "_id": "_fn$organizationAuth",
    "name": "organizationAuth", 
    "code": "(query (str \"{\\\"select\\\": [{\\\"organization/auth\\\": [\\\"_id\\\"]}],\\n \\\"from\\\": \" (?o) \"}\"))"
},
{
    "_id": "_fn$shipmentPOApproved",
    "name": "shipmentPOApproved",
    "code":  "(get-all (query (str \"{ \\\"select\\\": [{\\\"purchaseOrder/_shipments\\\": [{\\\"purchaseOrder/approved\\\": [\\\"_id\\\"]}]}],\\n   \\\"from\\\": \" (?sid) \"}\")) [\"purchaseOrder/_shipments\" \"purchaseOrder/approved\" \"_id\"])",
    "doc": "Gets all of the PO approved from the PO a shipment is connected to."
},
{
    "_id": "_fn$approvedOrgTypes",
    "name": "approvedOrgTypes",
    "code": "(get-all (query (str \"{\\\"select\\\": [{\\\"purchaseOrder/approved\\\": [{\\\"organization/type\\\": [\\\"_tag/id\\\"]}]}],\\n \\\"from\\\":\" (?sid) \"}\")) [\"purchaseOrder/approved\" \"organization/type\" \"_tag/id\"])"
},
{
    "_id": "_fn$shipmentSentBy",
    "name": "shipmentSentBy",
    "code": "(nth (get-all (query (str \"{ \\\"select\\\": [{\\\"shipment/sentBy\\\": [\\\"_id\\\"]}], \\\"from\\\": \" (?sid) \"}\")) [\"shipment/sentBy\", \"_id\"]) 0)",
    "doc": "Gets shipment/sentBy."
},
{
    "_id": "_fn$shipmentConnectedToPO?",
    "name": "shipmentConnectedToPO?",
    "code":  "(if-else (nil? (get-all (query (str \"{ \\\"select\\\": [{\\\"purchaseOrder/_shipments\\\": [\\\"_id\\\"]}],\\n   \\\"from\\\": \" (?sid) \"}\")) [\"purchaseOrder/_shipments\" \"_id\"])) false true)"
},
{
    "_id": "_fn$sentSignature?",
    "name": "sentSignature?",
    "code": "(if-else (nil? (get-all (s) [\"shipment/sentSignature\" \"_id\"])) false true)"
},
{
    "_id": "_fn$GPSLocation?",
    "name": "GPSLocation?",
    "code":   "(if-else (nil? (get-all (s) [\"shipment/GPSLocation\"])) false true)"
},
{
    "_id": "_fn$shipper?",
    "name": "shipper?",
    "code":   "(if-else (nil? (get-all (query (str \"{\\\"select\\\": [\\\"*\\\"], \\\"from\\\": \" (?sid) \"}\")) [\"shipment/shipper\" \"_id\"])) false true)"
},
{
    "_id": "_fn$purchaseOrderReceivedSignaturesAuth",
    "name": "purchaseOrderReceivedSignaturesAuth",
    "code": "(get-all (query (str \"{ \\\"select\\\": [{\\\"purchaseOrder/shipments\\\": [{\\\"shipment/receivedSignature\\\": [{\\\"organization/auth\\\": [\\\"_id\\\"]}]}]}], \\\"from\\\": \" (?sid) \"}\")) [\"purchaseOrder/shipments\" \"shipment/receivedSignature\" \"organization/auth\" \"_id\"])",
    "doc": "Gets all the auth records from the receivedSignatures from purchaseOrder/shipments."
}]
