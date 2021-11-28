<?php

namespace AppHttpControllers;

class PaginationController extends Controller
{

            /**

             * The attributes that are mass assignable.

             *

             * @var array

             */

            public function index()
            {

                        $myArray = [

                                    ['id' => 1, 'title' => 'Laravel CRUD'],

                                    ['id' => 2, 'title' => 'Laravel Ajax CRUD'],

                                    ['id' => 3, 'title' => 'Laravel CORS Middleware'],

                                    ['id' => 4, 'title' => 'Laravel Autocomplete'],

                                    ['id' => 5, 'title' => 'Laravel Image Upload'],

                                    ['id' => 6, 'title' => 'Laravel Ajax Request'],

                                    ['id' => 7, 'title' => 'Laravel Multiple Image Upload'],

                                    ['id' => 8, 'title' => 'Laravel Ckeditor'],

                                    ['id' => 9, 'title' => 'Laravel Rest API'],

                                    ['id' => 10, 'title' => 'Laravel Pagination'],

                        ];

                        $data = $this->paginate($myArray);

                        return view('paginate', compact('data'));

            }

            /**

             * The attributes that are mass assignable.

             *

             * @var array

             */

            public function paginate($items, $perPage = 5, $page = null, $options = [])
            {

                        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

                        $items = $items instanceof Collection ? $items : Collection::make($items);

                        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);

            }

}
