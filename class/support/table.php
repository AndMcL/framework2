<?php
/**
 * A class for the object Table
 *
 * @author Lindsay Marshall <lindsay.marshall@ncl.ac.uk>
 * @copyright 2018 Newcastle University
 *
 */
    namespace Support;

    use \Support\Context as Context;
/**
 * A class Table object
 */
    class Table
    {
/**
 * @var string The name of the table
 */
        private $table;

        use \ModelExtend\MakeGuard;
/**
 * Constructor
 */
        public function __construct(string $name)
        {
            $this->table = $name;
        }
/**
 * Return the fields
 *
 * @return array
 */
        public function fields()
        {
            return \R::inspect($this->table);
        }
/**
 * Return the name
 *
 * @return sting
 */
        public function name()
        {
            return $this->table;
        }
/**
 * Setup for an edit
 *
 * @param object    $context  The context object
 *
 * @return void
 */
        public function startEdit(Context $context, array $rest)
        {
            if (count($rest) >= 4)
            {
                $bn = $context->load($rest[2], $rest[3], \Framework\Context::RNULL);
                if (is_object($bn))
                {
                    $context->local()->addval('object', $bn);
                }
                else
                {
                    $context->local()->message(\Framework\Local::ERROR, 'Object does not exist');
                }
            }
        }
/**
 * Handle a bean edit
 *
 * @param object    $context  The context object
 *
 * @return void
 */
        public function edit(Context $context, array $rest)
        {
            $emess = [];
            return [!empty($emess), $emess];
        }
/**
 * View a Bean
 *
 * @param object    $context  The context object
 *
 * @return void
 */
        public function view(Context $context, array $rest)
        {
            $this->startEdit($context, $rest);
            $context->local()->addval('view', TRUE);
        }
    }
?>