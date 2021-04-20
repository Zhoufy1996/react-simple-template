import React from 'react';
import faker from 'faker';
import { range } from '../../shared/utils/range/range';
import CustomNestedList from '../../shared/components/nestlist/NestedList';

/**
 * 创建一个maxDepth层的SidebarData，每层数据为count个，
 * @returns
 */
const getDataSouce = (maxDepth: number = 3, count: number = 8) => {
    const getData = (depth: number = 0) => {
        const result = {
            key: faker.datatype.uuid(),
            data: {
                text: faker.random.words(4),
            },
            render: (data) => {
                return data.text;
            },
        };

        if (depth <= maxDepth) {
            result.children = range(0, count).map(() => {
                return getData(depth + 1);
            });
        }

        return result;
    };
    return range(0, count).map(() => {
        return getData(1);
    });
};

const SiderbarDemo: React.FC<{}> = () => {
    const dataSource = getDataSouce(3, 5);
    return <CustomNestedList dataSource={dataSource} selectedKey="" />;
};

export default SiderbarDemo;
