/*
The MIT-Zero License

Copyright (c) 2020 Bocoup

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import {
    initializeBlock,
    useBase,
    useRecords,
} from '@airtable/blocks/ui';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";

function Block() {
    const base = useBase();
    const table = base.getTableByNameIfExists('myfirst_table');
    const records = useRecords(table);
    const itemCountPerPage = 10;
    const [activePage, setActivePage] = useState(1);
    const sliceRecords = () => {
      const limit = (itemCountPerPage * activePage);
      return records.slice(limit - itemCountPerPage, limit);
    };
    const [offsetRecords, setOffsetRecords] = useState(sliceRecords());
    const handleChange = (pageNumber) => {
      setActivePage(pageNumber);
      setOffsetRecords(sliceRecords());
    }

    return (
      <div>
        <ul>
          {offsetRecords.map(record => {
            return <li key={record.id}>{record.id} -- {record.getCellValueAsString('lastname')}</li>
          })}
        </ul>

        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemCountPerPage}
          totalItemsCount={records.length}
          onChange={handleChange}
        />
      </div>
    );
}

initializeBlock(() => <Block />);