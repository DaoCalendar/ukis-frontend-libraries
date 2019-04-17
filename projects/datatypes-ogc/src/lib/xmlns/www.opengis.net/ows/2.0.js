var cxml = require("cxml");
var Primitive = require('../../xml-primitives');
var xlink = require('../../www.w3.org/1999/xlink');
var xml = require('../../www.w3.org/XML/1998/namespace');

cxml.register('http://www.opengis.net/ows/2.0', exports, [
	[Primitive, ['any', 'number', 'string'], []],
	[xml, ['LangType'], ['lang']],
	[xlink, ['actuateType', 'arcroleType', 'hrefType', 'roleType', 'showType', 'titleAttrType', 'typeType'], ['actuate', 'arcrole', 'href', 'role', 'show', 'title', 'type']]
], [
	'AbstractReferenceBaseType',
	'AcceptFormatsType',
	'AcceptVersionsType',
	'AdditionalParametersBaseType',
	'AdditionalParametersType',
	'AddressType',
	'AllowedValuesType',
	'AnyValueType',
	'BasicIdentificationType',
	'BoundingBoxType',
	'CapabilitiesBaseType',
	'CodeType',
	'ContactType',
	'ContentsBaseType',
	'DatasetDescriptionSummaryBaseType',
	'DescriptionType',
	'DomainMetadataType',
	'DomainType',
	'ExceptionType',
	'GetCapabilitiesType',
	'GetResourceByIdType',
	'IdentificationType',
	'KeywordsType',
	'LanguageStringType',
	'ManifestType',
	'MetadataType',
	'MimeType',
	'NilValueType',
	'OnlineResourceType',
	'PositionType',
	'PositionType2D',
	'RangeType',
	'ReferenceGroupType',
	'ReferenceType',
	'RequestMethodType',
	'ResponsiblePartySubsetType',
	'ResponsiblePartyType',
	'SectionsType',
	'ServiceReferenceType',
	'ServiceType',
	'TelephoneType',
	'UnNamedDomainType',
	'UpdateSequenceType',
	'ValuesReferenceType',
	'ValueType',
	'VersionType',
	'WGS84BoundingBoxType'
], [
	[0, 0, [[10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [17, 0], [18, 0], [19, 0], [20, 0], [23, 0], [28, 0], [29, 0], [30, 0], [31, 0], [36, 0], [38, 0], [40, 0], [42, 0], [43, 0], [44, 0], [46, 0], [47, 0], [48, 0], [49, 0], [50, 0], [51, 0], [53, 0], [54, 0], [55, 0], [56, 0], [57, 0], [61, 0], [62, 0], [63, 0], [64, 0], [65, 0], [66, 0], [67, 0], [68, 0], [69, 0], [70, 0], [74, 0], [76, 0], [77, 0], [78, 0], [81, 0], [83, 0], [85, 0], [86, 0], [87, 0], [88, 0], [89, 0], [90, 0], [92, 0], [94, 0], [95, 0], [97, 0]], [[120, 0], [75, 0]]],
	[0, 0, [], [[2, 1], [3, 1], [4, 0], [5, 1], [6, 1], [7, 1], [91, 0]]],
	[0, 0, [[114, 3]], []],
	[0, 0, [[134, 2]], []],
	[0, 37, [[14, 0]], []],
	[0, 15, [[14, 3]], []],
	[0, 0, [[16, 1], [21, 1], [25, 1], [32, 3], [35, 3], [71, 1]], []],
	[0, 0, [[74, 2], [94, 2]], []],
	[0, 0, [], []],
	[0, 27, [[47, 1], [56, 3]], []],
	[0, 0, [[111, 0], [130, 0]], [[27, 1], [33, 1]]],
	[0, 0, [[109, 1], [65, 1], [85, 1], [86, 1]], [[127, 1], [132, 0]]],
	[1, 3, [], [[22, 1]]],
	[0, 0, [[101, 1], [24, 1], [45, 1], [113, 1], [117, 1]], []],
	[0, 0, [[28, 3], [67, 3]], []],
	[0, 27, [[20, 3], [28, 3], [107, 0], [56, 3], [97, 3]], []],
	[0, 0, [[10, 3], [50, 3], [90, 3]], []],
	[1, 3, [], [[75, 1]]],
	[0, 53, [], [[59, 0]]],
	[0, 0, [[39, 3]], [[37, 0], [52, 1]]],
	[0, 0, [[98, 1], [99, 1], [100, 1], [121, 1]], [[128, 1]]],
	[0, 0, [[68, 1], [82, 3]], [[122, 0], [131, 0]]],
	[0, 20, [[19, 3], [20, 3], [68, 3]], []],
	[0, 0, [[108, 2], [126, 1]], []],
	[1, 3, [], [[1, 1]]],
	[0, 20, [[77, 2]], []],
	[0, 0, [[11, 1]], [[9, 1], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]]],
	[3, 3, [], []],
	[1, 23, [], [[60, 1]]],
	[0, 0, [], [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]]],
	[7, 2, [], []],
	[7, 2, [], []],
	[0, 0, [[54, 1], [57, 1], [88, 1]], [[120, 1]]],
	[0, 20, [[12, 2]], []],
	[0, 12, [[10, 3], [105, 1], [47, 1], [56, 3]], []],
	[0, 40, [[103, 3]], []],
	[0, 0, [[23, 1], [48, 1], [70, 1], [83, 1]], []],
	[0, 0, [[23, 1], [48, 1], [66, 1], [70, 1], [83, 0]], []],
	[0, 0, [[84, 3]], []],
	[0, 45, [[79, 0], [80, 0]], []],
	[3, 3, [], []],
	[0, 0, [[41, 3], [96, 3]], []],
	[0, 0, [[17, 0], [18, 0], [29, 1], [31, 1], [55, 1], [56, 3], [62, 0], [78, 1], [92, 1], [95, 0]], []],
	[3, 3, [], []],
	[1, 3, [], [[75, 0]]],
	[3, 3, [], []],
	[3, 3, [], []],
	[0, 21, [[110, 0], [129, 0]], [[26, 1], [34, 1]]],
	[0, 0, [[14, 1]], []],
	[0, 0, [], []],
	[0, 0, [[112, 0], [93, 2]], []],
	[0, 0, [[19, 1], [89, 1]], []],
	[0, 0, [[20, 1], [97, 1]], []],
	[0, 0, [[51, 2]], []],
	[0, 0, [[46, 0]], []],
	[0, 0, [[36, 2]], [[1, 1], [133, 0]]],
	[3, 3, [], []],
	[0, 0, [[51, 2]], []],
	[0, 0, [[106, 2], [118, 2]], []],
	[0, 0, [[56, 1], [15, 1]], []],
	[0, 0, [], []],
	[0, 0, [[104, 3], [40, 1], [63, 2], [116, 3]], []],
	[0, 0, [[102, 3], [30, 2], [56, 3], [115, 3]], [[58, 0]]],
	[3, 3, [], []],
	[0, 0, [[76, 1], [87, 1]], []],
	[0, 27, [[13, 3], [42, 1], [72, 3], [124, 0], [125, 2]], []],
	[0, 0, [[73, 0], [119, 1], [123, 0]], []]
], [
	['about', [3], 0],
	['Abstract', [35], 0],
	['AbstractMetaData', [], 3],
	['AbstractReferenceBase', [12], 3],
	['AccessConstraints', [3], 0],
	['AdditionalParameter', [61], 0, 11],
	['AdditionalParameters', [16], 0, 56],
	['AdministrativeArea', [3], 0],
	['AllowedValues', [18], 0],
	['AnyValue', [19], 0],
	['AvailableCRS', [3], 2],
	['BoundingBox', [21], 2],
	['City', [3], 0],
	['codeSpace', [3], 0],
	['ContactInfo', [24], 0],
	['ContactInstructions', [3], 0],
	['Country', [3], 0],
	['crs', [3], 0],
	['crs', [3], 0],
	['DatasetDescriptionSummary', [26], 0],
	['DataType', [28], 0],
	['DCP', [65], 0],
	['DefaultValue', [56], 0],
	['DeliveryPoint', [3], 0],
	['dimensions', [2], 0],
	['dimensions', [2], 0],
	['ElectronicMailAddress', [3], 0],
	['Exception', [30], 0],
	['exceptionCode', [3], 0],
	['ExceptionReport', [66], 0],
	['ExceptionText', [3], 0],
	['ExtendedCapabilities', [1], 0],
	['Facsimile', [3], 0],
	['Fees', [3], 0],
	['GetCapabilities', [31], 0],
	['GetResourceByID', [32], 0],
	['HoursOfService', [3], 0],
	['HTTP', [69], 0],
	['Identifier', [23], 0],
	['IndividualName', [3], 0],
	['InputData', [36], 0],
	['Keywords', [34], 0],
	['Language', [3], 0],
	['locator', [3], 0],
	['Manifest', [36], 0],
	['MaximumValue', [56], 0],
	['Meaning', [28], 0],
	['Metadata', [37], 2],
	['MinimumValue', [56], 0],
	['name', [3], 0],
	['name', [3], 0],
	['nilReason', [3], 0],
	['nilValue', [39], 0],
	['NoValues', [71], 0],
	['Operation', [73], 0],
	['OperationResponse', [36], 0],
	['OperationsMetadata', [72], 0],
	['OrganisationName', [3], 0],
	['OtherSource', [37], 0],
	['OutputFormat', [38], 0],
	['PointOfContact', [48], 0],
	['PositionName', [3], 0],
	['PostalCode', [3], 0],
	['Profile', [3], 0],
	['ProviderName', [3], 0],
	['Range', [43], 0],
	['reference', [3], 0],
	['Reference', [45], 2, 12],
	['ReferenceGroup', [44], 0],
	['ReferenceSystem', [28], 0],
	['RequestMessage', [1], 0],
	['RequestMessageReference', [3], 0],
	['Resource', [], 0],
	['ResourceID', [3], 0],
	['Role', [23], 0],
	['Section', [3], 0],
	['ServiceIdentification', [76], 0],
	['ServiceProvider', [77], 0],
	['ServiceReference', [50], 0, 76],
	['Spacing', [56], 0],
	['SupportedCRS', [3], 0, 19],
	['Title', [35], 0],
	['type', [3], 0],
	['UOM', [28], 0],
	['Value', [1], 0],
	['Value', [56], 0],
	['ValuesReference', [55], 0],
	['Voice', [3], 0],
	['WGS84BoundingBox', [58], 0, 20],
	['AcceptFormats', [13], 0],
	['AcceptLanguages', [68], 0],
	['AcceptVersions', [14], 0],
	['Address', [17], 0],
	['Constraint', [29], 0],
	['Constraint', [29], 0],
	['Constraint', [29], 0],
	['Format', [38], 0],
	['Get', [46], 0],
	['Identifier', [23], 0],
	['Keyword', [35], 0],
	['Languages', [64], 0],
	['LowerCorner', [42], 0],
	['LowerCorner', [41], 0],
	['Name', [23], 0],
	['OnlineResource', [40], 0],
	['OutputFormat', [38], 0],
	['Parameter', [29], 0],
	['Parameter', [29], 0],
	['Phone', [52], 0],
	['Post', [46], 0],
	['ProviderSite', [40], 0],
	['rangeClosure', [74], 0],
	['Sections', [49], 0],
	['service', [51], 0],
	['ServiceContact', [47], 0],
	['ServiceType', [23], 0],
	['ServiceTypeVersion', [57], 0],
	['Type', [23], 0],
	['updateSequence', [54], 0],
	['updateSequence', [54], 0],
	['UpperCorner', [42], 0],
	['UpperCorner', [41], 0],
	['version', [57], 0],
	['version', [57], 0],
	['version', [67], 0],
	['Version', [57], 0]
]);