var cxml = require("cxml");
var Primitive = require('../../xml-primitives');
var ows = require('../ows/1.1');

cxml.register('http://www.opengis.net/fes/2.0', exports, [
	[Primitive, ['Date', 'any', 'boolean', 'number', 'string'], []],
	[ows, ['DomainType', 'MetadataType'], ['Metadata']]
], [
	'AbstractAdhocQueryExpressionType',
	'AbstractIdType',
	'AbstractProjectionClauseType',
	'AbstractQueryExpressionType',
	'AbstractSelectionClauseType',
	'AbstractSortingClauseType',
	'AdditionalOperatorsType',
	'AliasesType',
	'ArgumentsType',
	'ArgumentType',
	'AvailableFunctionsType',
	'AvailableFunctionType',
	'BBOXType',
	'BinaryComparisonOpType',
	'BinaryLogicOpType',
	'BinarySpatialOpType',
	'BinaryTemporalOpType',
	'ComparisonOperatorNameType',
	'ComparisonOperatorsType',
	'ComparisonOperatorType',
	'ComparisonOpsType',
	'ConformanceType',
	'DistanceBufferType',
	'Extended_CapabilitiesType',
	'ExtensionOperatorType',
	'ExtensionOpsType',
	'Filter_CapabilitiesType',
	'FilterType',
	'FunctionType',
	'GeometryOperandsType',
	'Id_CapabilitiesType',
	'LiteralType',
	'LogicOpsType',
	'LowerBoundaryType',
	'MatchActionType',
	'MeasureType',
	'PropertyIsBetweenType',
	'PropertyIsLikeType',
	'PropertyIsNilType',
	'PropertyIsNullType',
	'ResourceIdentifierType',
	'ResourceIdType',
	'Scalar_CapabilitiesType',
	'SchemaElement',
	'SortByType',
	'SortOrderType',
	'SortPropertyType',
	'Spatial_CapabilitiesType',
	'SpatialOperatorNameType',
	'SpatialOperatorsType',
	'SpatialOperatorType',
	'SpatialOpsType',
	'Temporal_CapabilitiesType',
	'TemporalOperandsType',
	'TemporalOperatorNameType',
	'TemporalOperatorsType',
	'TemporalOperatorType',
	'TemporalOpsType',
	'TypeNamesListType',
	'TypeNamesType',
	'UnaryLogicOpType',
	'UomIdentifier',
	'UomSymbol',
	'UomURI',
	'UpperBoundaryType',
	'VersionActionTokens',
	'VersionType'
], [
	[0, 0, [[2, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0], [20, 0], [21, 0], [23, 0], [24, 0], [25, 0], [26, 0], [27, 0], [29, 0], [30, 0], [31, 0], [33, 0], [34, 0], [35, 0], [36, 0], [37, 0], [39, 0], [40, 0], [41, 0], [42, 0], [45, 0], [46, 0], [55, 0], [56, 0], [57, 0], [58, 0], [60, 0], [61, 0], [62, 0], [63, 0], [64, 0], [65, 0], [66, 0], [67, 0], [68, 0], [69, 0], [70, 0], [74, 0], [75, 0], [77, 0], [78, 0], [79, 0], [80, 0], [81, 0], [84, 0], [86, 0]], []],
	[0, 11, [[9, 3], [11, 1], [12, 1]], [[88, 0], [121, 0]]],
	[0, 0, [], []],
	[0, 0, [], []],
	[0, 0, [], [[38, 0]]],
	[0, 0, [], []],
	[0, 0, [], []],
	[0, 0, [[107, 3]], []],
	[7, 5, [], []],
	[0, 0, [[89, 2]], []],
	[0, 0, [[1, 1], [83, 0]], [[49, 0]]],
	[0, 0, [[96, 2]], []],
	[0, 0, [[90, 1], [1, 1], [71, 0]], [[47, 0]]],
	[0, 59, [[7, 2], [33, 2]], []],
	[0, 28, [[33, 2]], [[103, 1], [43, 1]]],
	[0, 40, [[2, 2], [21, 2], [34, 2], [37, 2], [42, 2], [75, 2], [78, 2]], []],
	[0, 59, [[4, 2], [33, 2]], []],
	[0, 65, [[3, 2], [33, 2]], []],
	[3, 5, [], []],
	[0, 0, [[91, 2]], []],
	[0, 0, [], [[106, 0]]],
	[0, 0, [], []],
	[0, 0, [[22, 2]], []],
	[0, 59, [[6, 2], [94, 0], [33, 2]], []],
	[0, 0, [[87, 1]], []],
	[0, 0, [], [[53, 0]]],
	[0, 0, [], []],
	[0, 0, [[93, 0], [95, 1], [97, 1], [101, 1], [109, 1], [112, 1], [115, 1]], []],
	[0, 12, [[2, 2], [21, 0], [34, 0], [37, 0], [42, 0], [75, 0], [78, 0]], []],
	[0, 0, [[33, 3]], [[51, 0]]],
	[0, 0, [[98, 2]], []],
	[0, 0, [[108, 2]], []],
	[0, 0, [[5, 1]], [[82, 0]]],
	[0, 0, [], []],
	[0, 0, [[33, 0]], []],
	[3, 5, [], []],
	[1, 4, [], [[122, 0]]],
	[0, 28, [[33, 0], [102, 0], [123, 0]], []],
	[0, 28, [[33, 2]], [[32, 0], [44, 1], [73, 0], [85, 0]]],
	[0, 28, [[33, 0]], [[54, 0]]],
	[0, 28, [[33, 0]], []],
	[0, 0, [[1, 1]], [[50, 0]]],
	[0, 9, [], [[28, 0], [59, 0], [72, 0], [76, 0], [124, 0]]],
	[0, 0, [[92, 1], [41, 1]], []],
	[3, 5, [], []],
	[0, 0, [[111, 2]], []],
	[3, 5, [], []],
	[0, 0, [[110, 1], [84, 0]], []],
	[0, 0, [[100, 0], [114, 0]], []],
	[3, 5, [], []],
	[0, 0, [[113, 2]], []],
	[0, 0, [[99, 1]], [[105, 0]]],
	[0, 0, [], []],
	[0, 0, [[117, 0], [120, 0]], []],
	[0, 0, [[116, 2]], []],
	[3, 5, [], []],
	[0, 0, [[119, 2]], []],
	[0, 0, [[118, 1]], [[104, 0]]],
	[0, 0, [], []],
	[7, 67, [], []],
	[3, 5, [], []],
	[0, 40, [[2, 2], [21, 0], [34, 0], [37, 0], [42, 0], [75, 0], [78, 0]], []],
	[3, 5, [], []],
	[3, 5, [], []],
	[3, 5, [], []],
	[0, 0, [[33, 0]], []],
	[3, 5, [], []],
	[3, 5, [], []],
	[0, 0, [], []],
	[0, 0, [], []],
	[0, 0, [], []],
	[0, 0, [[35, 1]], []],
	[0, 0, [[74, 1]], []],
	[0, 0, [[60, 1], [61, 1], [62, 1], [63, 1], [64, 1], [65, 1], [66, 1], [67, 1], [68, 1], [69, 1]], []],
	[0, 0, [[37, 1], [84, 1], [40, 1]], []],
	[0, 0, [], []],
	[0, 0, [], [[48, 0]]],
	[0, 0, [[70, 1]], []],
	[0, 0, [], []],
	[0, 0, [[14, 1], [55, 1], [56, 1]], []],
	[0, 0, [[16, 1], [20, 1], [23, 1], [24, 1], [25, 1], [27, 1], [31, 1], [39, 1], [58, 1], [80, 1], [86, 1]], []],
	[0, 0, [], [[52, 0]]],
	[0, 0, [[13, 1], [15, 1], [17, 1], [18, 1], [19, 1], [26, 1], [29, 1], [30, 1], [45, 1], [46, 1], [57, 1], [77, 1], [79, 1], [81, 1]], []]
], [
	['Id:_Id', [9], 3],
	['*', [2], 4],
	['*', [2], 4],
	['*', [2], 4],
	['*', [2], 4],
	['*', [2], 4],
	['AbstractAdhocQueryExpression', [8], 3, 10],
	['AbstractProjectionClause', [], 3],
	['AbstractQueryExpression', [11], 3],
	['AbstractSelectionClause', [], 3],
	['AbstractSortingClause', [], 3],
	['After', [24], 0, 78],
	['And', [22], 0, 42],
	['AnyInteracts', [24], 0, 78],
	['BBOX', [20], 0, 75],
	['Before', [24], 0, 78],
	['Begins', [24], 0, 78],
	['BegunBy', [24], 0, 78],
	['Beyond', [30], 0, 75],
	['comparisonOps', [28], 3],
	['Constraint', [6], 0],
	['Contains', [23], 0, 75],
	['Crosses', [23], 0, 75],
	['Disjoint', [23], 0, 75],
	['During', [24], 0, 78],
	['DWithin', [30], 0, 75],
	['endDate', [1], 0],
	['EndedBy', [24], 0, 78],
	['Ends', [24], 0, 78],
	['Equals', [23], 0, 75],
	['escapeChar', [5], 0],
	['expression', [], 3],
	['extensionOps', [33], 1],
	['Filter', [35], 0, 11],
	['Filter_Capabilities', [34], 0],
	['Function', [36], 0, 33],
	['handle', [5], 0],
	['Intersects', [23], 0, 75],
	['Literal', [39], 0, 33],
	['LogicalOperators', [85], 0],
	['logicOps', [40], 3],
	['matchCase', [3], 0],
	['matchCase', [3], 0],
	['Meets', [24], 0, 78],
	['MetBy', [24], 0, 78],
	['name', [5], 0],
	['name', [5], 0],
	['name', [5], 0],
	['name', [5], 0],
	['name', [5], 0],
	['name', [5], 0],
	['name', [5], 0],
	['nilReason', [5], 0],
	['Not', [68], 0, 42],
	['Or', [22], 0, 42],
	['OverlappedBy', [24], 0, 78],
	['Overlaps', [23], 0, 75],
	['previousRid', [5], 0],
	['PropertyIsBetween', [44], 0, 21],
	['PropertyIsEqualTo', [21], 0, 21],
	['PropertyIsGreaterThan', [21], 0, 21],
	['PropertyIsGreaterThanOrEqualTo', [21], 0, 21],
	['PropertyIsLessThan', [21], 0, 21],
	['PropertyIsLessThanOrEqualTo', [21], 0, 21],
	['PropertyIsLike', [45], 0, 21],
	['PropertyIsNil', [46], 0, 21],
	['PropertyIsNotEqualTo', [21], 0, 21],
	['PropertyIsNull', [47], 0, 21],
	['ResourceId', [49], 0, 2],
	['Returns', [5], 0],
	['rid', [5], 0],
	['singleChar', [5], 0],
	['SortBy', [52], 0, 12],
	['spatialOps', [59], 3],
	['startDate', [1], 0],
	['TContains', [24], 0, 78],
	['temporalOps', [65], 3],
	['TEquals', [24], 0, 78],
	['Touches', [23], 0, 75],
	['TOverlaps', [24], 0, 78],
	['type', [5], 0],
	['Type', [5], 0],
	['ValueReference', [5], 0, 33],
	['wildCard', [5], 0],
	['Within', [23], 0, 75],
	['AdditionalOperators', [14], 0],
	['aliases', [15], 0],
	['Argument', [17], 0],
	['Arguments', [16], 0],
	['ComparisonOperator', [27], 0],
	['ComparisonOperators', [26], 0],
	['Conformance', [29], 0],
	['Distance', [43], 0],
	['Extended_Capabilities', [31], 0],
	['Function', [19], 0],
	['Functions', [18], 0],
	['GeometryOperand', [83], 0],
	['GeometryOperands', [37], 0],
	['GeometryOperands', [37], 0],
	['Id_Capabilities', [38], 0],
	['LowerBoundary', [41], 0],
	['matchAction', [42], 0],
	['name', [62], 0],
	['name', [56], 0],
	['name', [25], 0],
	['Operator', [32], 0],
	['ResourceIdentifier', [48], 0],
	['Scalar_Capabilities', [50], 0],
	['SortOrder', [53], 0],
	['SortProperty', [54], 0],
	['Spatial_Capabilities', [55], 0],
	['SpatialOperator', [58], 0],
	['SpatialOperators', [57], 0],
	['Temporal_Capabilities', [60], 0],
	['TemporalOperand', [88], 0],
	['TemporalOperands', [61], 0],
	['TemporalOperands', [61], 0],
	['TemporalOperator', [64], 0],
	['TemporalOperators', [63], 0],
	['typeNames', [66], 0],
	['uom', [69], 0],
	['UpperBoundary', [72], 0],
	['version', [74], 0]
]);