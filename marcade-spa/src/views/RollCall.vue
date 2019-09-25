<template>
    <div class="container-fluid py-5 px-10">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-between">
                    <h4 class="display-1">Second Term, 2014/2015 Session</h4>
                    <button class="btn btn-primary btn-md align-self-center">Save changes</button>
                </div>
                <div class="w-100 d-flex justify-space-between align-center">
                    <div class="lead"> Class: SS3B </div>
                    <v-menu 
                    v-model='dateMenu'
                    :close-on-content-click='false'
                    max-width='290'
                    >
                        <template  v-slot:activator="{ on }">
                            <v-text-field
                            :value="computedDateFormattedDatefns"
                            clearable
                            label="Roll Call Date"
                            readonly
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model='attendanceDate'
                        @change='dateMenu=false'
                        ></v-date-picker>

                    </v-menu>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                  <v-data-table
                    :headers="headers"
                    :items="students"
                    :loading='loading' 
                    loading-text="Loading... Please wait"
                    :items-per-page="50"
                    class="elevation1 my-table"
                    :search="search"
                    :footer-props="{
                            itemsPerPageOptions: [50],
                    }"
                >
                
                   <template  v-slot:body="{ items }">
                    <tbody  > 
                        <tr v-for="item in items"  :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>{{ item.full_name }}</td>
                            <td> 
                                <v-checkbox
                                v-model='item.status'
                                color='success'
                                class="d-flex justify-center"
                                @change="changeState(item)"
                                >

                                </v-checkbox>
                            </td>
                            <td>
                                 <v-checkbox
                                    v-model='item.isLate'
                                    color='red darken-3'
                                    class="d-flex justify-center"
                                    @change="changeState(item)"
                                >
                                </v-checkbox>
                            </td>
                        </tr>
                    </tbody>
                </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'RollCall',
    data() {
        return {
            loading: false,
            search: '',
            dateMenu: false,
            attendanceDate: new Date().toISOString().substr(0, 10),
            headers: [
                {
                    text: 'Student ID',
                    value: 'id'
                },
                 {
                    text: 'Full Name',
                    value: 'full_name'
                },
                 {
                    text: 'Present/Absent Status',
                    value: 'status'
                },
                {
                    text: 'Late',
                    value: 'isLate'
                },
            ],
            students: [
                {
                    id: 1,
                    full_name: 'Ogunboyejo Olatunde',
                    status: false,
                    isLate: false
                },
                {
                    id: 2,
                    full_name: 'Daramola Boluwatife',
                    status: true,
                    isLate: false
                },
                {
                    id: 3,
                    full_name: 'Olufotebi Ifeoluwa',
                    status: false,
                    isLate: false
                }
            ]
        }
    },
    computed: {
        computedDateFormattedDatefns() {
            return this.attendanceDate ? moment(this.attendanceDate).format('dddd, MMMM Do YYYY') : ''
        }
    },
    methods: {
        changeState(item) {
            console.log('Yo')
        
        }

    }
}
</script>

<style>
.lead {
    flex: 9
}

</style>
